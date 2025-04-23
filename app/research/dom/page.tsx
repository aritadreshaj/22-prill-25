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
          Estrangement: Home Then and Now
        </h1>

        {/* Categories */}
        <div className="text-sm text-neutral-600 space-y-2 mb-10">
          <p>Publisher: BA Hons International Architecture Conference 25</p>
          <p>Institute: University of Brighton, School of Architecture, Technology and Engineering</p>
          <p>Location: Brighton, United Kingdom</p>
          <p>Date: April, 2025</p>
        </div>

        {/* Theme */}
        <p className="text-base text-black mb-6">
          Theme: Subjectiv Domesticity
        </p>

        {/* Abstract */}
        <p className="text-base text-black mb-10">
        What happens when homes stop reflecting who we are, and start erasing us instead? Once handmade and memory-filled, living spaces have become sterile, optimized, and commodified. We no longer build homes; we consume them. Through the lens of Marx’s estrangement, this reflective piece explores how domestic life has been shaped and stripped by convenience, capitalism, and crisis.
        But in the cracks of disaster and displacement, could there be room to reclaim imagination? To re-craft spaces that remember, reflect, and resist?
        This monologue, invites us to rethink what it truly means to live and belong.

        </p>

        {/* Read More */}
        <p className="text-sm text-neutral-600">
          Read more:{" "}
          <a
            href="https://blogs.brighton.ac.uk/domesticityundersiege/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            DUS
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}