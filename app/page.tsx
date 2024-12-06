"use client"
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Services from "@/components/Services";



const Home = () => {
  return (
    <div className="flex flex-col bg-slate-50 scroll-smooth">
      <Services />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;