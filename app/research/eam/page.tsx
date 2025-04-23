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
          Avant-Garde and War
        </h1>
        <p className="text-sm italic text-neutral-600 mb-4">
          Under wraps for now. More to be revealed soon.
        </p>
        <p className="text-sm text-neutral-600 mb-4">
          Publisher: 9th Biennial Conference of the European Network for Avant-Garde and Modernism Studies (EAM)
        </p>
        <p className="text-sm text-neutral-600">Institute: Jagiellonian University</p>
        <p className="text-sm text-neutral-600">Location: Kraków, Poland</p>
        <p className="text-sm text-neutral-600">Date: September, 2024</p>
        <p className="text-black mt-6">
          This conference explores the intersection of avant-garde art and war, examining how modernist movements 
          have responded to and been shaped by the conflicts of the 20th and 21st centuries. Scholars and artists 
          from around the world will present their research and creative works, offering new perspectives on the 
          relationship between art, politics, and conflict.
        </p>
        <p className="text-neutral-700 mt-6">
          Discover more in{" "}
          <a
            href="https://polonistyka.uj.edu.pl/nauka/konferencje/-/journal_content/56_INSTANCE_O822n48l6TNa/41623/156829729"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Avant-Garde and War
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}