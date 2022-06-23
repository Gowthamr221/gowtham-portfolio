import React from "react";
import ContactComponent from "../../components/ContactComponent/ContactComponent";
import SocialLink from '../../components/SocialLink/SocialLink'
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

function ContactMe() {
  return (
    <div>
      <NavBar />
      <SocialLink url="https://www.google.com" socialplatform="Google"/>
      <SocialLink url="https://www.linkedin.com" socialplatform="Linkedin"/>
      
      <ContactComponent />
      <Footer />
    </div>
  );
}

export default ContactMe;
