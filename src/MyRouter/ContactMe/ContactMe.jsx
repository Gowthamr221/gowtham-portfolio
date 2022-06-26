import React from "react";
import ContactComponent from "../../components/ContactComponent/ContactComponent";
import SocialLink from '../../components/SocialLink/SocialLink'
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

function ContactMe() {
  return (
    <div>
      <NavBar/>
      <SocialLink url="https://www.linkedin.com/in/gowtham-reddy-3a5b2812a/" socialplatform="Linked In"/>
      <SocialLink url="https://github.com/Gowthamr221" socialplatform="GitHub"/>
      <SocialLink url="https://leetcode.com/sk5831/" socialplatform="LeetCode"/>
      <SocialLink url="https://www.behance.net/gowthamr221" socialplatform="Behance"/>
      <SocialLink url="https://gowthamr221.itch.io/" socialplatform="Itch.io"/>

      <ContactComponent />
      <Footer />
    </div>
  );
}

export default ContactMe;
