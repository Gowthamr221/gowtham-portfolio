import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Gallery from "../../components/Gallery/Gallery"
import AchievementsTimeline from "../../components/AchievementsTimeline/AchievementsTimeline"
function AboutMe() {
  return (
    <div>
        <NavBar/>
        <AchievementsTimeline />
        <Footer/>
    </div>
  )
}

export default AboutMe
