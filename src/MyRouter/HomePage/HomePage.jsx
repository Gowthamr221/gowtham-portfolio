import React from "react";
import Footer from "../../components/Footer/Footer";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import NavBar from "../../components/NavBar/NavBar";
import Quote from "../../components/Quote/Quote";
import TechShowcase from "../../components/TechShowcase/TechShowcase";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroComponent />
      <Quote/>
      <TechShowcase />
      <Footer/>
    </div>
  );
}

export default HomePage;
