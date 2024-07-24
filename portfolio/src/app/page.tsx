import About from "@/components/About/About";
import { Footer } from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/skills/skills";
import Head from "next/head";

export default function Home() {
  return (

    
    <>
     <head>
          {/* Favicon */}
          <link rel="icon" href="/logo.ico" />
      </head>
    <body>
      <Navbar/>
    <Header/>
    <main>
      <About/>
      <Skills/>
      <Projects/>
    </main>
    <Footer />
      
    </body>
    
    </>
  );
}