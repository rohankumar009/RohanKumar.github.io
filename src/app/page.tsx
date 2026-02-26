import { About } from "@/components/about";
import { BlogPreview } from "@/components/blog-preview";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Identity } from "@/components/identity";
import { Navbar } from "@/components/navbar";
import { Philosophy } from "@/components/philosophy";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Identity />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Philosophy />
      <BlogPreview />
      <Contact />
      <Footer />
    </main>
  );
}
