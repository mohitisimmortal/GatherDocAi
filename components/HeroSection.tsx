// HeroSection.tsx
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pt-28 flex flex-col items-center text-left sm:text-center max-w-screen-md mx-auto px-4">
      {/* Hero Text */}
      <h1 className="text-xl sm:text-3xl font-semibold gradient-text">
        Generate Complete Documentation for Your Codebase in <span className="texthighlight">One Click </span> with <br /> AI-Powered Precision!
      </h1>

      {/* Subtext */}
      <p className="mt-3 text-neutral-500 text-sm md:text-base sm:max-w-lg">
        GatherDocAI scans, understands, and transforms your code into clear, professional documentation—instantly.
      </p>

      {/* Combined Email Input and Demo Button */}
      <div className="mt-4 flex items-center justify-between secondarybg rounded-full overflow-hidden max-w-md w-full p-1 text-sm md:text-base">
        <input
          type="email"
          placeholder="work email"
          className="flex-1 min-w-0 px-2 py-2 text-black secondarybg placeholder-black outline-none sm:w-auto sm:max-w-xs"
        />
        <button className="px-4 py-2 primarybg text-white hover:bg-neutral-900 transition rounded-full">
          Get a Demo
        </button>
      </div>

      {/* Bragging Line with Stars */}
      <div className="mt-2 flex items-center text-neutral-500 text-xs">
        <span>⭐⭐⭐⭐⭐ Loved by over 100 startups</span>
      </div>

      {/* Image */}
      <div className="mt-10">
        <Image
          src='/heroimage.jpg' // Path to the image file
          alt="Illustration"
          width={500} // Adjust the width as needed
          height={500} // Adjust the height as needed
          className="w-full max-w-sm md:max-w-md mx-auto pb-12"
          priority // Ensures this image loads quickly as it's in the hero section
        />
      </div>
    </div>
  );
};

export default HeroSection;