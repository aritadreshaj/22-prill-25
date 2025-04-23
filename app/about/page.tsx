"use client";

import Link from "next/link";
import Header from "@/components/Header"; // Import the reusable Header component
import Footer from "@/components/Footer"; // Import the reusable Footer component
import CustomCursor from "@/components/CustomCursor"; // Import the reusable CustomCursor component
import Image from "next/image"; // Import Image for the profile photo

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 mx-[20%] py-16">
        {/* About Section */}
        <h1 className="text-2xl font-light mb-10">about</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Profile Photo */}
          <div>
            <div className="aspect-[1/1] bg-neutral-200 relative">
              <Image
                src="/profile.jpeg" // Replace with the path to your profile photo
                alt="Arita Dreshaj"
                fill
                className="object-cover squares-lg"
                priority
              />
            </div>
          </div>

          {/* Bio Text - Left Column */}
          <div className="flex flex-col justify-start text-justify">
            <p className="text-neutral-700 mb-4">
              Arita Dreshaj is an architect and urban designer whose research draws on historical theory to examine
              the social dimensions of space and memory.
            </p>
            <p className="text-neutral-700">
              Since 2020, she has contributed to a diverse range of projects, from new builds to reconstructions and urban-scale competitions. Her work has been recognized with multiple awards, including four first prizes, two third places, and one honorable mention.
            </p>
          </div>

          {/* Bio Text - Right Column */}
          <div className="flex flex-col justify-start text-justify">
            <p className="text-neutral-700 mb-4">
              Her work focuses on the intersection of architecture, urban design, and historical research, aiming to
              create spaces that reflect cultural memory and social identity.
            </p>
            <p className="text-neutral-700">
              She is particularly focused on how architecture can become a vessel for social identity and historical continuity in an evolving urban landscape.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-start">
          <p className="text-neutral-700">
            Contact: <a href="mailto:info@aritadreshaj.com" className="text-[#ff6000]">info@aritadreshaj.com</a>
          </p>
        </div>
                <div className="mt-8 text-start">
          <p className="text-neutral-700">
            Location: <a href="between Berlin & Prishtine" className="text-[#ff6000]">between Berlin & Prishtine</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}