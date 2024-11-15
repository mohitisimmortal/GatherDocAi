// OurSolution.tsx
import React from "react";
import Image from "next/image";

const OurSolution = () => {
    return (
        <div className="max-w-screen-md mx-auto px-4 py-16" id="oursolution">
            <h2 className="text-center secondarycolor text-sm md:text-base">Our Solution</h2>

            {/* Blurred Line */}
            <div className="relative flex justify-center z-0">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
            </div>

            {/* Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Card 1 */}
                <div className="primarybg p-6 rounded-lg border border-neutral-800">
                    <h3 className="secondarycolor text-lg font-semibold mb-2">Automated documentation with One Click</h3>
                    <p className="text-neutral-600 mb-2">
                        Generate comprehensive documentation instantly with just one click, freeing up developers to focus on coding tasks and eliminating the need for manual write-ups.
                    </p>
                    <Image
                        src='/im3.avif'
                        alt="Project Overview"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                </div>

                {/* Card 2 */}
                <div className="primarybg p-6 rounded-lg border border-neutral-800">
                    <h3 className="secondarycolor text-lg font-semibold mb-2">Keep documentation up-to-date effortlessly</h3>
                    <p className="text-neutral-600 mb-2">
                        Our tool seamlessly scans your codebase and updates documentation as your project evolves, ensuring information is always accurate and accessible for all team members.
                    </p>
                    <Image
                        src='/im4.avif'
                        alt="Project Updates"
                        width={500}
                        height={500}
                        className="rounded-lg h-[50vh] md:h-[60vh] xl:h-[53vh] object-cover object-top"
                    />
                </div>

            </div>
        </div>
    );
};

export default OurSolution;