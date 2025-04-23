"use client";

import Link from "next/link";
import Header from "@/components/Header"; // Import the reusable Header component
import Footer from "@/components/Footer"; // Import the reusable Footer component
import CustomCursor from "@/components/CustomCursor"; // Import the reusable CustomCursor component

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 mx-[20%] py-16 text-center">
        {/* About Section */}
        <h1 className="text-2xl font-light mb-10">about</h1>
        <p className="text-neutral-700 mb-4">
          Arita Dreshaj is an architect and urban designer whose research draws on historical theory to examine the social dimensions of space and memory. Since 2020, she has contributed to a diverse range of projects, from new builds to reconstructions and urban-scale competitions. Her work has been recognized with multiple awards, including four first prizes, two third places, and one honorable mention. Her work focuses on the intersection of architecture, urban design, and historical research, aiming to create spaces that reflect cultural memory and social identity. She is particularly focused on how architecture can become a vessel for social identity and historical continuity in an evolving urban landscape.
        </p>

        {/* Contact Information */}
        <div className="mt-8">
          <p className="text-neutral-700">
            Based: <span className="text-[#ff6000]">between Berlin & Prishtine</span>
          </p>
          <p className="text-neutral-700">
            Contact: <a href="mailto:info@aritadreshaj.com" className="text-[#ff6000]">info@aritadreshaj.com</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}