// header.tsx
import { CubeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="z-50 fixed top-5 left-0 right-0 flex justify-center">
            {/*TO DO- Add a blurry effect in this div--*/}
            <div className=" primarybg flex items-center justify-between max-w-screen-md w-full mx-4 p-2 pl-3 rounded-full"
                style={{ background: "linear-gradient(90deg,#050505 0%,#1A1A1A 100%)" }}
            >
                <div className="flex items-center space-x-2">
                    <Link href={'/'}>
                        <CubeIcon />
                    </Link>
                    <a href="#" className="text-white border-l-[1px] h-4 pl-2 flex items-center text-sm font-extralight md:text-base">
                        Product
                    </a>
                </div>
                <button className="px-2 py-1 bg-white text-black text-sm md:text-base font-medium rounded-full hover:bg-gray-200">
                    Get a Demo
                </button>
            </div>
        </div>
    );
};

export default Header;