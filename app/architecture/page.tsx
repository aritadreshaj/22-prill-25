"use client";

import Header from "@/components/Header"; // Import the reusable Header component
import Footer from "@/components/Footer"; // Import the reusable Footer component
import CustomCursor from "@/components/CustomCursor"; // Import the reusable CustomCursor component
import Link from "next/link"; // Import Link for navigation

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 mx-[20%] py-16">
        <h1 className="text-2xl font-light mb-10">architecture</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Row 1 */}
          <div>
            <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/architecture/whisperpine">Whisperpine</Link>
              </p>
              <p className="text-sm text-neutral-600">Prishtina, Kosova</p>
              <p className="text-sm text-neutral-600">2025</p>
              <p className="text-sm text-neutral-600">single-family home</p>
            </div>
          </div>
          <div>
            <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/architecture/home-above-rails">Home Above Rails</Link>
              </p>
              <p className="text-sm text-neutral-600">Paris, France</p>
              <p className="text-sm text-neutral-600">2025</p>
              <p className="text-sm text-neutral-600">social-housing</p>
            </div>
          </div>
          <div>
            <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/architecture/eco-lodge">Eco Lodge</Link>
              </p>
              <p className="text-sm text-neutral-600">Burim, Kosova</p>
              <p className="text-sm text-neutral-600">2024</p>
              <p className="text-sm text-neutral-600">micro-cabin</p>
            </div>
          </div>

          {/* Row 2 */}
          <div>
            <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/architecture/leverkusen-mitte-quartier">Leverkusen Mitte Quartier</Link>
              </p>
              <p className="text-sm text-neutral-600">Leverkusen, Germany</p>
              <p className="text-sm text-neutral-600">2024</p>
              <p className="text-sm text-neutral-600">bike parking & office spaces</p>
            </div>
          </div>
          <div>
            <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/architecture/rostock-theaterwerk">Rostock Theaterwerk</Link>
              </p>
              <p className="text-sm text-neutral-600">Rostock, Germany</p>
              <p className="text-sm text-neutral-600">2024</p>
              <p className="text-sm text-neutral-600">theater production facility</p>
            </div>
          </div>
          <div>
            <div className="aspect-[1/1] bg-neutral-200"></div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">
                <Link href="/architecture/brickwork-reborn">Brickwork Reborn</Link>
              </p>
              <p className="text-sm text-neutral-600">Burim, Kosova</p>
              <p className="text-sm text-neutral-600">2024</p>
              <p className="text-sm text-neutral-600">single-house family</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}