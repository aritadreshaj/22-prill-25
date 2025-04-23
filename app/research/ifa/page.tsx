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
          Rilindja Revealed: The Intersection of Modernism and Local Identity in Prishtina
        </h1>
        <p className="text-sm italic text-neutral-600 mb-4">
          Under wraps for now. More to be revealed soon.
        </p>
        <p className="text-sm text-neutral-600 mb-4">
          Publisher: Institut für Architektur
        </p>
        <p className="text-sm text-neutral-600">
          Institute: Technische Universität Berlin
        </p>
        <p className="text-sm text-neutral-600">Location: Berlin, Germany</p>
        <p className="text-sm text-neutral-600">Date: July, 2023</p>
        <p className="text-black mt-6">
          "Rilindja Revealed" explores the intersection of modernist architecture and local identity in Prishtina. 
          This exhibit delves into the historical and cultural significance of the Rilindja building, 
          showcasing its role as a symbol of resilience and transformation in the urban landscape of Kosovo.
        </p>
        <p className="text-neutral-700 mt-6">
          Discover more in{" "}
          <a
            href="https://example.com/rilindja-revealed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Rilindja Revealed
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}