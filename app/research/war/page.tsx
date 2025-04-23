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
          War Museum: Historical Empathy and Architecture
        </h1>
        <p className="text-sm italic text-neutral-600 mb-4">
          Under wraps for now. More to be revealed soon.
        </p>
        <p className="text-sm text-neutral-600 mb-4">
          Publisher: Universitz of Prishtina
        </p>
        <p className="text-sm text-neutral-600">Institute: University of Prishtina</p>
        <p className="text-sm text-neutral-600">Location: Prishtina, Kosova</p>
        <p className="text-sm text-neutral-600">Date: February, 2020</p>
        <p className="text-black mt-6">
          The "War Museum: Historical Empathy and Architecture" project explores the role of architecture 
          in fostering historical empathy. This study examines how architectural design can evoke emotional 
          connections to historical events, creating spaces that educate and inspire reflection on the past.
        </p>
        <p className="text-neutral-700 mt-6">
          Discover more in{" "}
          <a
            href="https://example.com/war-museum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            War Museum
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}