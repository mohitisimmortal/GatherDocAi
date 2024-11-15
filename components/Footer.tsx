// Footer.tsx
import React from "react";

const Footer = () => {
    const handleClick = () => {
        alert('This is just a project to showcase in Portfolio, not an actual saas.')
    }

    return (
        <footer className=" secondarybg text-center">
            {/* Footer Content */}
            <div className="p-3 primarybg h-60 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold mb-3 md:text-3xl">Documentation is just one click away</h2>

                {/* Email Input and Demo Button */}
                <div className="flex items-center justify-center">
                    <div className="flex items-center secondarybg rounded-full overflow-hidden max-w-md w-full p-1 text-sm md:text-base md:w-[30rem]">
                        <input
                            type="email"
                            placeholder="work email"
                            className="flex-1 min-w-0 px-2 py-2 text-black placeholder-black outline-none secondarybg sm:w-auto sm:max-w-xs"
                        />
                        <button className="px-4 py-2 primarybg text-white font-medium hover:bg-neutral-800 transition rounded-full" onClick={handleClick}>
                            Get a Demo
                        </button>
                    </div>
                </div>
                <h3 className="mt-2"><a href="#" className="underline">GatherDocAI </a><span className="ml-2 underline">2024</span> </h3>
            </div>
        </footer>
    );
};

export default Footer;