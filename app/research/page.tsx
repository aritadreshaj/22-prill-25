"use client";

import Header from "@/components/Header"; // Import the reusable Header component
import Footer from "@/components/Footer"; // Import the reusable Footer component
import CustomCursor from "@/components/CustomCursor"; // Import the reusable CustomCursor component
import Link from "next/link"; // Import Link for navigation

const projects = [
  {
    slug: "dom", // Folder name for "Estrangement"
    title: "Estrangement",
    location: "Brighton, United Kingdom",
    date: "2025-04-01", // Use ISO format for easier sorting
    category: "Conference",
  },
  {
    slug: "atlas", // Folder name for "Unbounded Spaces"
    title: "Unbounded Spaces",
    location: "Delft, Netherlands",
    date: "2025-04-16",
    category: "Magazine",
  },
  {
    slug: "ifa", // Folder name for "Rilindja Revealed"
    title: "Rilindja Revealed",
    location: "Berlin, Germany",
    date: "2023-07-01",
    category: "Exhibit",
  },
  {
    slug: "eam", // Folder name for "Avant-Garde and War"
    title: "Avant-Garde and War",
    location: "Kraków, Poland",
    date: "2024-09-01",
    category: "Conference",
  },
  {
    slug: "teh", // Folder name for "Rebuilding to Last"
    title: "Rebuilding to Last",
    location: "Aarhus, Denmark",
    date: "2024-06-01",
    category: "Workshop",
  },
  {
    slug: "war", // Folder name for "War Museum"
    title: "War Museum",
    location: "Prishtina, Kosova",
    date: "2020-02-01",
    category: "Study",
  },
];

export default function ResearchPage() {
  // Sort projects by date in descending order (most recent first)
  const sortedProjects = projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 mx-[20%] py-16">
        <h1 className="text-2xl font-light mb-10">research</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {sortedProjects.map((project) => (
            <div key={project.slug}>
              <div className="aspect-[1/1] bg-neutral-200"></div>
              <div className="mt-4 text-center">
                <p className="text-lg font-medium">
                  <Link href={`/research/${project.slug}`}>{project.title}</Link>
                </p>
                <p className="text-sm text-neutral-600">{project.location}</p>
                <p className="text-sm text-neutral-600">{new Date(project.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
                <p className="text-sm text-neutral-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}