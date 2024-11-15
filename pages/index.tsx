import localFont from "next/font/local";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ProblemStatement from "@/components/ProblemStatement";
import OurSolution from "@/components/OurSolution";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <Header/>
      <HeroSection/>
      <ProblemStatement/>
      <OurSolution/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
