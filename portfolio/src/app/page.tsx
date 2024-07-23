import About from "@/components/About/About";
import { Footer } from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <>
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