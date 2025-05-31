"use client"
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const StarsCanvas = React.lazy(() => import("./components/StarBackground"));

export default function Home() {
  return (
    <LanguageProvider>
      <React.Suspense>
        <StarsCanvas />
      </React.Suspense>
      <Header />
      <div className="relative mt-28 max-w-[703px] mx-auto text-center z-[2] max-md:max-w-full max-md:px-11 max-xs:px-7">
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Footer />
      </div>
      </LanguageProvider>
  );
}
