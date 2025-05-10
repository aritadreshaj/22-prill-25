"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Ensure Button component exists in your project
import Header from "@/components/Header"; // Ensure you have a Header component
import Footer from "@/components/Footer"; // Ensure you have a Footer component
import CustomCursor from "@/components/CustomCursor"; // Ensure you have a CustomCursor component
import "@fontsource/poppins"; // Ensure the font is installed and used correctly
import "@/styles/typography.js"; // Ensure this file exists
import "@/styles/project-page.css"; // Ensure this CSS file is available
import "@/styles/globals.css"; // Ensure global styles are included

// Define the questionnaire fields in one place
const QUESTIONNAIRE_FIELDS = 
[
  { name: "emri", label: "Emri dhe Mbiemri", type: "text" },
  { name: "ditelindja", label: "Data e lindjes", type: "text" },
  { name: "vendlindja", label: "Vendlindja", type: "text" },
  { name: "vendbanimiAktual", label: "Vendbanimi aktual", type: "text" },
  { name: "email", label: "E-mail për kontakt", type: "text" },
  {
    name: "rrëfim",
    label: "Çfarë të sjell ndër mend fjala 'luftë'? Ndaj me ne një kujtim, një përvojë ose një ndjesi që e mban ende me vete.",
    type: "textarea"
  },
  {
    name: "mbartje",
    label: "Çfarë mbart ende nga ajo kohë - shpresë, frikë, forcë apo peng?",
    type: "textarea"
  }
] as const;

type QuestionnaireField = typeof QUESTIONNAIRE_FIELDS[number];
type FormDataState = {
  [K in QuestionnaireField['name']]: string;
} & {
  images: File[];
  videos: File[];
  audio: File | null;
};

export default function ShareYourStory() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const initialFormData = QUESTIONNAIRE_FIELDS.reduce(
    (acc, field) => ({ ...acc, [field.name]: "" }),
    { images: [] as File[], videos: [] as File[], audio: null as File | null }
  ) as FormDataState;
  const [formData, setFormData] = useState<FormDataState>(initialFormData);

  // Audio recording state
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);

  // New state to handle title hover/click
  const [titleActive, setTitleActive] = useState(false);

  // Start/stop recording
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    const chunks: BlobPart[] = [];
    mediaRecorder.ondataavailable = (event) => chunks.push(event.data);
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/webm" });
      const file = new File([blob], "recording.webm", { type: "audio/webm" });
      setFormData((prev) => ({ ...prev, audio: file }));
      setRecordingSeconds(0);
    };
    mediaRecorder.start();
    setIsRecording(true);
    setRecordingSeconds(0);
  };
  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  // Timer effect for recording
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingSeconds((sec) => sec + 1);
      }, 1000);
    } else {
      setRecordingSeconds(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRecording]);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files && files.length > 0) {
      const fileList = Array.from(files);
      // Only allow 'images' and 'videos' for file arrays
      if (name === "images" || name === "videos") {
        setFormData((prev) => ({
          ...prev,
          [name]: prev[name as "images" | "videos"]
            ? [...(prev[name as "images" | "videos"] as File[]), ...fileList]
            : fileList,
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((file) => {
          if (file instanceof File) formDataToSend.append(key, file);
        });
      } else if (value instanceof File) {
        formDataToSend.append(key, value);
      } else if (value) {
        formDataToSend.append(key, value as string);
      }
    });
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData(initialFormData);
      } else {
        const data = await response.json().catch(() => ({}));
        alert(data?.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  // Typewriter effect for the title
  const titleFull = "një shtëpi, një rrugë";
  const [titleIndex, setTitleIndex] = useState(0);
  useEffect(() => {
    if (titleIndex < titleFull.length) {
      const timeout = setTimeout(() => setTitleIndex(titleIndex + 1), 120);
      return () => clearTimeout(timeout);
    }
  }, [titleIndex, titleFull.length]);

  // Helper for rendering text or textarea
  const renderField = (field: typeof QUESTIONNAIRE_FIELDS[number]) => (
    <div className="mb-4" key={field.name}>
      <label htmlFor={field.name} className="block mb-1 font-medium text-gray-700">{field.label}</label>
      {field.type === "textarea" ? (
        <textarea
          id={field.name}
          name={field.name}
          value={formData[field.name] as string}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-lg"
          rows={3}
        />
      ) : (
        <input
          type={field.type}
          id={field.name}
          name={field.name}
          value={formData[field.name] as string}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-lg"
        />
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <CustomCursor />
      <Header />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.jpg')", filter: "brightness(0.7)" }}
      />
      <div className="relative z-10 flex-1 flex flex-col justify-between min-h-0">
        {/* Center the title absolutely over the background image */}
        <div
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{ pointerEvents: showForm ? "none" : "auto" }}
        >
          <h1
            className={`text-6xl md:text-8xl font-light text-center transition-colors duration-200 cursor-pointer select-none ${
              titleActive ? "text-black" : "text-white"
            }`}
            style={{
              fontFamily: "Poppins, serif",
              textShadow: titleActive ? "none" : "0 2px 16px rgba(0,0,0,0.3)",
              letterSpacing: "0.04em",
              whiteSpace: "pre",
            }}
            tabIndex={0}
            onMouseEnter={() => setTitleActive(true)}
            onMouseLeave={() => setTitleActive(false)}
            onFocus={() => setTitleActive(true)}
            onBlur={() => setTitleActive(false)}
            onClick={() => setShowForm(true)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") setShowForm(true);
            }}
            aria-label="Hap pyetësorin"
          >
            {titleFull.slice(0, titleIndex)}
            <span className="inline-block w-2 animate-blink">|</span>
          </h1>
        </div>
        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 0.7s steps(1) infinite;
          }
        `}</style>
        {showForm && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20" onClick={() => setShowForm(false)}>
            <div
              className="relative w-full max-w-5xl mx-auto bg-white p-12 rounded-2xl"
              style={{
                borderRadius: "2rem",
                maxHeight: "80vh",
                minHeight: "80vh",
                minWidth: "100vh",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                marginTop: "10rem",
                marginBottom: "13rem",
                overflowY: "auto",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE/Edge
              }}
              onClick={e => e.stopPropagation()}
            >
              <style>{`
                /* Hide scrollbar for Chrome, Safari and Opera */
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                .hide-scrollbar {
                  -ms-overflow-style: none;  /* IE and Edge */
                  scrollbar-width: none;     /* Firefox */
                }
              `}</style>
              <div className="hide-scrollbar">
                {!submitted ? (
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Ndaje historinë tënde</h2>
                    {/* Emri dhe Mbiemri */}
                    {renderField(QUESTIONNAIRE_FIELDS.find(f => f.name === "emri")!)}
                    {/* Data e lindjes */}
                    {renderField(QUESTIONNAIRE_FIELDS.find(f => f.name === "ditelindja")!)}
                    {/* Vendlindja dhe Vendbanimi aktual në një rresht */}
                    <div className="mb-4 flex flex-row gap-4">
                      <div className="flex-1">
                        <label htmlFor="vendlindja" className="block mb-1 font-medium text-gray-700">Vendlindja</label>
                        <input
                          type="text"
                          id="vendlindja"
                          name="vendlindja"
                          value={formData.vendlindja}
                          onChange={handleChange}
                          className="w-full border border-gray-300 p-2 rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="vendbanimiAktual" className="block mb-1 font-medium text-gray-700">Vendbanimi aktual</label>
                        <input
                          type="text"
                          id="vendbanimiAktual"
                          name="vendbanimiAktual"
                          value={formData.vendbanimiAktual}
                          onChange={handleChange}
                          className="w-full border border-gray-300 p-2 rounded-lg"
                        />
                      </div>
                    </div>
                    {/* Render the rest of the fields except emri, ditelindja, vendlindja, vendbanimiAktual */}
                    {QUESTIONNAIRE_FIELDS.filter(
                      f =>
                        f.name !== "emri" &&
                        f.name !== "ditelindja" &&
                        f.name !== "vendlindja" &&
                        f.name !== "vendbanimiAktual"
                    ).map(renderField)}
                    {/* Audio recording */}
                    <div className="mb-6">
                      <label className="block mb-1 font-medium text-gray-700">Në vend që ta shkruash, mund ta tregosh me zë. Regjistro një mesazh zanor.</label>
                      <div className="flex items-center gap-3">
                        {!isRecording ? (
                          <Button type="button" onClick={startRecording} className="mr-2 bg-green-600 text-white">Fillo regjistrimin</Button>
                        ) : (
                          <Button type="button" onClick={stopRecording} className="bg-red-600 text-white">Përfundo regjistrimin</Button>
                        )}
                        {isRecording && (
                          <span className="text-sm text-gray-700">
                            {recordingSeconds}s
                          </span>
                        )}
                      </div>
                      {formData.audio && !isRecording && <p className="text-green-700 mt-2">Audio e regjistruar është gati për t’u dërguar.</p>}
                    </div>
                    {/* Uploads: images and videos in one row */}
                    <div className="mb-6">
                      <label className="block mb-1 font-medium text-gray-700">
                        A dëshironi të ndani fotografi ose video për të shoqëruar rrëfimin tuaj?
                      </label>
                      <div className="flex flex-row gap-4">
                        {/* Ngarko foto */}
                        <label className="cursor-pointer">
                          <Button
                            type="button"
                            className="mr-2 bg-green-600 text-white"
                            tabIndex={-1}
                            onClick={e => {
                              e.preventDefault();
                              document.getElementById("upload-images")?.click();
                            }}
                          >
                            Ngarko foto
                          </Button>
                          <input
                            id="upload-images"
                            type="file"
                            name="images"
                            multiple
                            accept="image/*,.jpg,.jpeg,.png,.gif"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                        {/* Ngarko video */}
                        <label className="cursor-pointer">
                          <Button
                            type="button"
                            className="mr-2 bg-green-600 text-white"
                            tabIndex={-1}
                            onClick={e => {
                              e.preventDefault();
                              document.getElementById("upload-videos")?.click();
                            }}
                          >
                            Ngarko video
                          </Button>
                          <input
                            id="upload-videos"
                            type="file"
                            name="videos"
                            multiple
                            accept="video/*"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                      {/* Show selected images/documents */}
                      {formData.images.length > 0 && (
                        <ul className="mt-2 text-sm text-gray-600">
                          {formData.images.map((file, idx) => (
                            <li key={idx}>{file.name}</li>
                          ))}
                        </ul>
                      )}
                      {/* Show selected videos */}
                      {formData.videos.length > 0 && (
                        <ul className="mt-2 text-sm text-gray-600">
                          {formData.videos.map((file, idx) => (
                            <li key={idx}>{file.name}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="flex justify-end mt-6">
                      <Button type="submit" className="bg-black text-white px-8 py-2 rounded-lg shadow">Dërgo</Button>
                      <Button type="button" className="ml-4" variant="outline" onClick={() => setShowForm(false)}>Mbyll</Button>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-16">
                    <p className="text-2xl text-center text-black font-semibold mb-6">Faleminderit!</p>
                    <Button className="bg-black text-white" onClick={() => { setShowForm(false); setSubmitted(false); }}>Mbyll</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Sticky footer at the bottom */}
      <div className="w-full fixed left-0 bottom-0 z-50">
        <Footer />
      </div>
    </div>
  );
}
