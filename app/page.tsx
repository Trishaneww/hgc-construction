"use client"
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Toaster } from "@/components/ui/toaster";



const Home = () => {
  return (
    <div className="flex flex-col bg-slate-50 scroll-smooth">
      <Services />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;