import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientFavorites from "@/components/ClientFavorites";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <ClientFavorites />
        <About />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
