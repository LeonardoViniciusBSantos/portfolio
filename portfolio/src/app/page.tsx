import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/skills/skills";
import { sanityFetch } from "@/sanity";
import { SanityDocument } from "next-sanity";

export async function Home({footer}: any) {
  return (
    <>
    <Header/>
    <main>
      <About/>
      <Skills/>
      <Projects/>
    </main>
    <Footer footer={footer}/>
    </>
  );
}

export default async function ropsFecth() {
  const footer = await sanityFetch<SanityDocument>({query: `*[_type == "footer"][0]`});

  return footer
}
