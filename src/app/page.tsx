import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import StarsCanvas from "./components/StarBackground";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { LanguageProvider } from "./context/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <StarsCanvas />
      <Header />
      <div className="relative mt-28 max-w-[703px] mx-auto text-center z-[2] max-md:max-w-full max-md:px-11">
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
