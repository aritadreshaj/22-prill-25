"use client";

import React from "react"; // Import React for JSX syntax
import Header from "@/components/Header"; // Import the reusable Header component
import Footer from "@/components/Footer"; // Import the reusable Footer component
import CustomCursor from "@/components/CustomCursor"; // Import the reusable CustomCursor component
import Link from "next/link";

export default function ResearchPage() {
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
          {/* Row 1 */}
          <div>
            <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/research/domesticity-under-siege">
                  Domesticity Under Siege: International Architectural Conference 25
                </Link>
              </p>
              <p className="text-sm text-neutral-600">April, 2025</p>
              <p className="text-sm text-neutral-600">Brighton, United Kingdom</p>
              <p className="text-sm text-neutral-600">Conference</p>
            </div>
          </div>
          <div>
            <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/research/atlantis-magazine-issue-35-2">
                  Atlantis Magazine Issue #35.2: Futuring Reclaiming Identities
                </Link>
              </p>
              <p className="text-sm text-neutral-600">April, 2025</p>
              <p className="text-sm text-neutral-600">Delft, Netherlands</p>
              <p className="text-sm text-neutral-600">Magazine</p>
            </div>
          </div>
          <div>
          <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/research/avant-garde-and-war">
                  Avant-Garde and War: 9th Biennial Conference of the European Network for Avant-Garde and Modernism Studies (EAM)
                </Link>
              </p>
              <p className="text-sm text-neutral-600">September, 2024</p>
              <p className="text-sm text-neutral-600">Kraków, Poland</p>
              <p className="text-sm text-neutral-600">Conference</p>
            </div>
          </div>

          {/* Row 2 */}
          <div>
              <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/research/rebuilding-to-last">
                  Rebuilding to Last: Trans Europe Halles & Institute for X
                </Link>
              </p>
              <p className="text-sm text-neutral-600">June, 2024</p>
              <p className="text-sm text-neutral-600">Aarhus, Denmark</p>
              <p className="text-sm text-neutral-600">Workshop</p>
            </div>
          </div>
          <div>
              <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/research/rilindja-revealed">
                  Rilindja Revealed: The Intersection of Modernism and Local Identity in Prishtina
                </Link>
              </p>
              <p className="text-sm text-neutral-600">July, 2023</p>
              <p className="text-sm text-neutral-600">Berlin, Germany</p>
              <p className="text-sm text-neutral-600">Exhibit</p>
            </div>
          </div>
          <div>
            <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/research/war-museum">
                  War Museum: Historical Empathy and Architecture
                </Link>
              </p>
              <p className="text-sm text-neutral-600">February, 2020</p>
              <p className="text-sm text-neutral-600">Prishtina, Kosova</p>
              <p className="text-sm text-neutral-600">Bachelor Thesis</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}