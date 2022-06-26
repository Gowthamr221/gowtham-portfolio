import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Wrapper from '../components/Wrapper/Wrapper'
import AboutMe from './AboutMe/AboutMe'
import ContactMe from './ContactMe/ContactMe'
import HomePage from './HomePage/HomePage'
import Projects from './Projects/Projects'
function MyRoutes() {
  return (
   <BrowserRouter>
   <Wrapper>
       <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/projects" element={<Projects/>}/>
           <Route path="/aboutme" element={<AboutMe/>}/>
           <Route path="/contactme" element={<ContactMe/>}/>
       </Routes>
       </Wrapper>
   </BrowserRouter>
  )
}

export default MyRoutes