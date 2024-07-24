import About from "@/components/About/About";
import { Footer } from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <main>
      <About/>
      <Skills/>
      <Projects/>
    </main>
    <Footer />
    </>
  );
}