"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header"; // Import the reusable Header component
import Footer from "@/components/Footer"; // Import the reusable Footer component
import { useEffect } from "react";

const projects = {
  "domesticity-under-siege": {
    title: "Domesticity Under Siege: International Architectural Conference 25",
    date: "April, 2025",
    location: "Brighton, United Kingdom",
    category: "Conference",
    description:
      "Under wraps for now. More to be revealed soon.",
  },
  "atlantis-magazine-issue-35-2": {
    title: "Atlantis Magazine Issue #35.2: Futuring Reclaiming Identities",
    date: "April, 2025",
    location: "Delft, Netherlands",
    category: "Magazine",
    description:
      "Under wraps for now. More to be revealed soon.",
  },
  "rilindja-revealed": {
    title: "Rilindja Revealed: The Intersection of Modernism and Local Identity in Prishtina",
    date: "July, 2023",
    location: "Berlin, Germany",
    category: "Exhibit",
    description:
      "Under wraps for now. More to be revealed soon.",
  },
  "avant-garde-and-war": {
    title: "Avant-Garde and War: 9th Biennial Conference of the European Network for Avant-Garde and Modernism Studies (EAM)",
    date: "September, 2024",
    location: "Kraków, Poland",
    category: "Conference",
    description:
      "Under wraps for now. More to be revealed soon.",
  },
  "rebuilding-to-last": {
    title: "Rebuilding to Last: Trans Europe Halles & Institute for X",
    date: "June, 2024",
    location: "Aarhus, Denmark",
    category: "Workshop",
    description:
      "Under wraps for now. More to be revealed soon.",
  },
  "war-museum": {
    title: "War Museum: Historical Empathy and Architecture",
    date: "February, 2020",
    location: "Prishtina, Kosova",
    category: "Bachelor Thesis",
    description:
      "Under wraps for now. More to be revealed soon.",
  },
};

type ProjectSlug = keyof typeof projects; // Define the valid slugs based on the keys of the projects object

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects[slug as ProjectSlug]; // Explicitly cast slug to the ProjectSlug type

  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col relative">
        {/* Custom Cursor */}
        <div
          id="custom-cursor"
          className="fixed top-0 left-0 w-4 h-4 bg-[#ff6000] rounded-full pointer-events-none z-50"
        ></div>

        {/* Header */}
        <Header />

        <div className="flex-1 mx-[20%] py-16">
          <h1 className="text-3xl font-light mb-6">Project Not Found</h1>
          <p className="text-neutral-700">
            The project you are looking for does not exist. Please check the URL or return to the Research page.
          </p>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Custom Cursor */}
      <div
        id="custom-cursor"
        className="fixed top-0 left-0 w-4 h-4 bg-[#ff6000] rounded-full pointer-events-none z-50"
      ></div>

      {/* Header */}
      <Header />

      <div className="flex-1 mx-[20%] py-16">
        <h1 className="text-3xl font-light mb-6">{project.title}</h1>
        <p className="text-neutral-700 mb-4">{project.description}</p>
        <p className="text-sm text-neutral-600">Date: {project.date}</p>
        <p className="text-sm text-neutral-600">Location: {project.location}</p>
        <p className="text-sm text-neutral-600">Category: {project.category}</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}