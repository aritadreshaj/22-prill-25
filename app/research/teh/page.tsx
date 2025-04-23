"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function ProjectPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <CustomCursor />
      <Header />
      <div className="flex-1 mx-[20%] py-16">
        <h1 className="text-3xl font-light mb-6">
          Rebuilding to Last: Becoming a Forest
        </h1>
        <p className="text-sm italic text-neutral-600 mb-4">
          Under wraps for now. More to be revealed soon.
        </p>
        <p className="text-sm text-neutral-600 mb-4">
          Publisher: Trans Europe Halles
        </p>
        <p className="text-sm text-neutral-600">Institute: Institute for X</p>
        <p className="text-sm text-neutral-600">Location: Aarhus, Denmark</p>
        <p className="text-sm text-neutral-600">Date: June, 2024</p>
        <p className="text-black mt-6">
          "Rebuilding to Last: Becoming a Forest" is a workshop that explores sustainable architectural practices 
          and community-driven approaches to urban development. Hosted by Institute for X, this event brings 
          together architects, designers, and local communities to envision a future where cities coexist with 
          nature, fostering resilience and creativity.
        </p>
        <p className="text-neutral-700 mt-6">
          Discover more in{" "}
          <a
            href="https://example.com/rebuilding-to-last"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Rebuilding to Last
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}