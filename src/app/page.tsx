import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Books } from "@/components/sections/Books";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Books />
        <Research />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
