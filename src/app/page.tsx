import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/About";

export default function Home() {
  return (
    <div className="mt-28 max-w-[703px] mx-auto text-center">
      <Header />
      <Hero />
      <AboutMe />
    </div>
  );
}
