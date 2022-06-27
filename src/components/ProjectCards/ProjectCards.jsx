import React from 'react'
import txtutl from "./images/txtutl.png"
import "./styles/style.css"
function ProjectCards() {
  return (
    <div>
        <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden animate-card">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media.geeksforgeeks.org/wp-content/uploads/20211008223650/WhatsAppImage20211008at103524PM.jpeg" alt="blog"></img>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Mobile App</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Device Info</h1>
            <p class="leading-relaxed mb-3">Android app made while learning basics of android development. build using kotlin on android studio. This app displays system configuration of user device.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-purple-400 inline-flex items-center md:mb-2 lg:mb-0">visit github
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden animate-card">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={txtutl} alt="blog"></img>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Web Dev</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Text Utils</h1>
            <h2 class="text-purple-400  mb-1 "><a href="https://txtutl.herokuapp.com/" target="_blank">Preview</a></h2>
            <p class="leading-relaxed mb-3">A  text formatting and cleaning tool implemented in django and hosted on heroku.</p>
            <div class="flex items-center flex-wrap">
              <a href="https://github.com/Gowthamr221/django-textutils" target="_blank" class="text-purple-400 inline-flex items-center md:mb-2 lg:mb-0">visit github
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden animate-card">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://camo.githubusercontent.com/4dc73f98ac80c69db50abd4ddac5a77607d8f8529f18b50db6585cec703ed5e9/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d31456e4d44564b69552d7670722d6a434b5f3469503142664b666752532d702d55" alt="blog"></img>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Game Dev</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Pixel Adventure</h1>
            <h2 class="text-purple-400  mb-1 "><a href="https://pixel-adventure-web-build.vercel.app/" target="_blank">Preview</a></h2>
            <p class="leading-relaxed mb-3">2d Platformer game with 3 levels made using unity3d and c#. hosted on vercel </p>
            <div class="flex items-center flex-wrap ">
              <a href="https://github.com/Gowthamr221/pixel-adventure-web-build" target="_blank" class="text-purple-400 inline-flex items-center md:mb-2 lg:mb-0">visit github
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ProjectCards
