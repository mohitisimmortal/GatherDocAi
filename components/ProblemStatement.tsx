// ProblemStatement.tsx
import React from "react";
import Image from "next/image";

const ProblemStatement = () => {
    return (
        <div className="secondarybg">
            <div className="max-w-screen-md mx-auto px-4 py-16">
                {/* Problem Statement Title */}
                <h2 className="text-center text-black text-sm md:text-base">Problem Statement</h2>

                {/* Blurred Line */}
                <div className="relative flex justify-center z-0">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
                </div>

                {/* Cards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Card 1 */}
                    <div className="primarybg p-6 rounded-lg">
                        <h3 className="secondarycolor text-lg font-semibold mb-2">Developers lacks time for documentation</h3>
                        <p className="text-neutral-600 mb-2">
                            Developers are often focused on building and improving features, leaving little time for thorough documentation. This results in fragmented or outdated information that hinders team alignment.
                        </p>
                        <Image
                            src='/im1.avif'
                            alt="Project Overview"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="primarybg p-6 rounded-lg">
                        <h3 className="secondarycolor text-lg font-semibold mb-2">Maintaining documentation is tedious and time-consuming</h3>
                        <p className="text-neutral-600 mb-2">
                            Writing and updating documentation can be a repetitive task that slows down development progress, especially for teams without dedicated technical writers.
                        </p>
                        <Image
                            src='/im2.avif'
                            alt="Project Updates"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProblemStatement;