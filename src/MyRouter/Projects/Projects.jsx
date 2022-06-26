import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import ProjectCards from '../../components/ProjectCards/ProjectCards'
import Quote from '../../components/Quote/Quote'
import SmallProjectCards from '../../components/SmallProjectCards/SmallProjectCards'
import StatsDisplay from '../../components/StatsDisplay/StatsDisplay'

function Projects() {
  return (
    <div>
        <NavBar/>
        <SmallProjectCards/>
        <StatsDisplay/>
        <ProjectCards/>
        <Footer/>
    </div>
  )
}

export default Projects