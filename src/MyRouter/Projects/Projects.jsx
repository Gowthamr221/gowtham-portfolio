import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import ProjectCards from '../../components/ProjectCards/ProjectCards'
import SmallProjectCards from '../../components/SmallProjectCards/SmallProjectCards'

function Projects() {
  return (
    <div>
        <NavBar/>
        <ProjectCards/>
        <SmallProjectCards/>
        <Footer/>
    </div>
  )
}

export default Projects