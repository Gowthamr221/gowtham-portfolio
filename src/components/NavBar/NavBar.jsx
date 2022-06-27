import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div>
    <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto gap-5">
      <Link class="hover:text-white" to="/">Home</Link>
      <Link class="hover:text-white" to="/projects">Projects</Link>
      <Link class="hover:text-white" to="/aboutme">About Me</Link>
      <Link class="hover:text-white" to="/contactme">Contact Me</Link>
      
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
      
      <span class="ml-3 text-xl xl:block lg:hidden">Gowtham's Portfolio</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <a href='https://linktr.ee/gowthamr221' target="_blank">Links</a>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>


    </div>
  )
}

export default NavBar