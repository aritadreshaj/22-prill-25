"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header"; // Import the reusable Header component
import Footer from "@/components/Footer"; // Import the reusable Footer component
import CustomCursor from "@/components/CustomCursor"; // Import the reusable CustomCursor component

const architecture = {
  whisperpine: {
    title: "Whisperpine",
    year: "2025",
    location: "Prishtina, Kosova",
    category: "single-family home",
    description: "Under wraps for now. More to be revealed soon.",
  },
  "home-above-rails": {
    title: "Home Above Rails",
    year: "2025",
    location: "Paris, France",
    category: "social-housing",
    description: "Under wraps for now. More to be revealed soon.",
  },
  "eco-lodge": {
    title: "Eco Lodge",
    year: "2024",
    location: "Burim, Kosova",
    category: "micro-cabin",
    description: "Under wraps for now. More to be revealed soon.",
  },
  "leverkusen-mitte-quartier": {
    title: "Leverkusen Mitte Quartier",
    year: "2024",
    location: "Leverkusen, Germany",
    category: "bike parking & office spaces",
    description: "Under wraps for now. More to be revealed soon.",
  },
  "rostock-theaterwerk": {
    title: "Rostock Theaterwerk",
    year: "2024",
    location: "Rostock, Germany",
    category: "theater production facility",
    description: "Under wraps for now. More to be revealed soon.",
  },
  "brickwork-reborn": {
    title: "Brickwork Reborn",
    year: "2024",
    location: "Burim, Kosova",
    category: "single-house family",
    description: "Under wraps for now. More to be revealed soon.",
  },
};

type ArchitectureSlug = keyof typeof architecture; // Define the valid slugs based on the keys of the projects object

export default function ProjectPage() {
  const { slug } = useParams();
  const project = architecture[slug as ArchitectureSlug]; // Explicitly cast slug to the ProjectSlug type

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col relative">
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Header */}
        <Header />

        <div className="flex-1 mx-[20%] py-16">
          <h1 className="text-3xl font-light mb-6">Project Not Found</h1>
          <p className="text-neutral-700">
            The project you are looking for does not exist. Please check the URL or return to the Architecture page.
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
      <CustomCursor />

      {/* Header */}
      <Header />

      <div className="flex-1 mx-[20%] py-16">
        <h1 className="text-3xl font-light mb-6">{project.title}</h1>
        <p className="text-neutral-700 mb-4 animate-italicize">{project.description}</p>
        <p className="text-sm text-neutral-600">Year: {project.year}</p>
        <p className="text-sm text-neutral-600">Location: {project.location}</p>
        <p className="text-sm text-neutral-600">Category: {project.category}</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}