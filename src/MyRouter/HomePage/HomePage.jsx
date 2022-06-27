import React from "react";
import Achievements from "../../components/Achievements/Achievements";
import Footer from "../../components/Footer/Footer";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import NavBar from "../../components/NavBar/NavBar";
import Quote from "../../components/Quote/Quote";
import TechShowcase from "../../components/TechShowcase/TechShowcase";
import Testimonials from "../../components/Testimonials/Testimonials";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroComponent />
      <Achievements/>
      <TechShowcase />
      <Testimonials/>
      <Quote/>
      <Footer/>
    </div>
  );
}

export default HomePage;
