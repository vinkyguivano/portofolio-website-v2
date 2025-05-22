import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import StarsCanvas from "./components/StarBackground";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <StarsCanvas />
      <Header />
      <div className="relative mt-28 max-w-[703px] mx-auto text-center z-[2]">
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
