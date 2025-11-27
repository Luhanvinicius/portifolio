import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-primary noise-bg">
      <Header />
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

