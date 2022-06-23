import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import StatsDisplay from '../../components/StatsDisplay/StatsDisplay'
import Gallery from "../../components/Gallery/Gallery"
function AboutMe() {
  return (
    <div>
        <NavBar/>
        <StatsDisplay/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default AboutMe