"use client"
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Toaster } from "@/components/ui/toaster";



const Home = () => {
  return (
    <div className="flex flex-col bg-slate-100 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Info />
      <Faq />
      <Testimonials />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;