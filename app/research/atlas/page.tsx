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
        {/* Title */}
        <h1 className="text-3xl font-light mb-10">
          Unbounded Spaces: Rethinking Belonging and Imagination
        </h1>

        {/* Categories */}
        <div className="text-sm text-neutral-600 space-y-2 mb-10">
          <p>Publisher: Atlantis Magazine</p>
          <p>Institute: Delft University of Technology, Faculty of Architecture and the Built Environment</p>
          <p>Location: Delft, Netherlands</p>
          <p>Date: April, 2025</p>
        </div>

        {/* Theme */}
        <p className="text-base text-black mb-6">
          Theme: Futuring - Reclaiming Identities
        </p>

        {/* Abstract */}
        <p className="text-base text-black mb-10">
          What does it mean to reclaim an identity: restore what’s been lost, or imagine something entirely new?
          Inspired by Van Gogh’s The Starry Night, painted from the confines of an asylum, this piece explores how
          identity and belonging might transcend rigid categories and limited frames. Just as Van Gogh saw the cosmos
          through a barred window, can we reframe our own perspectives, making space for connection, difference, and
          transformation? What if borders became porous, and identities fluid-unfinished, alive? "Unbounded Spaces"
          invites you to look through a new lens, where imagination and belonging are radically redefined.
        </p>

        {/* Read More */}
        <p className="text-sm text-neutral-600">
          Read more:{" "}
          <a
            href="https://www.polistudelft.nl/atlantis/atlantisissues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Atlantis Magazine Issue #35.2
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}