"use client";

import dynamic from "next/dynamic";
import Features from "@/components/Features";
import NavBar from "@/components/Navbar";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const AboutDynamic = dynamic(() => import("@/components/About"), {
  ssr: false,
});
const HeroDynamic = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <HeroDynamic />
      <AboutDynamic />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
}
