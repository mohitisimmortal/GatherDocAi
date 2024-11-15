const testimonials = [
    {
        quote:
            "GatherDoc has made documentation effortless for our team. With just one click, we have detailed, accurate docs without interrupting our workflow.",
        name: "Sarah Chen",
        designation: "Lead Developer at CodeWave",
        src: "/testuser1.jpg",
    },
    {
        quote:
            "As a CTO, I’m constantly looking for ways to improve efficiency. GatherDoc’s automated documentation has saved us countless hours!",
        name: "Michael Rodriguez",
        designation: "CTO at FutureSoft",
        src: "/testuser2.jpg",
    },
    {
        quote:
            "Our developers can now focus on coding instead of spending time writing docs. GatherDoc has been a game-changer for our team alignment and productivity.",
        name: "Emily Watson",
        designation: "CEO at SkyBridge",
        src: "/testuser3.jpg",
    }
];



import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import { div } from 'framer-motion/client';

const Testimonials = () => {
    return (
        <div className='secondarybg'>
            <div className='py-16 max-w-screen-md mx-auto'>

        <h2 className="text-center text-black text-sm md:text-base">Trusted by teams</h2>

        {/* Blurred Line */}
        <div className="relative flex justify-center z-0">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
            <AnimatedTestimonials testimonials={testimonials}/>
        </div>
            </div>
    )
}

export default Testimonials
