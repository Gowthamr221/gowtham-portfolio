import React from 'react'
import behance_pic from "./images/behance.png"
import linkedin_pic from "./images/linkedin.png"
import github_pic from "./images/github.png"
import itchio_pic from "./images/itch.io.png"
import leetcode_pic from "./images/leetcode.png"
import codechef_pic from "./images/codechef.png"
function Gallery() {
  return (
    <div>
        <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">My Journey till now</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Measuring how far we have reached will keep on notifying us what we can do next. so here are few of the things i have worked on. Click on the cards to view the websites.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <a href="https://www.behance.net/gowthamr221" target="_blank">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={behance_pic}></img>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">Graphic Design Protfolio</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Behance</h1>
            <p class="leading-relaxed">few years before i took graphic design and video editing courses.i became good enough building scalable UI and product Prototyping.</p>
          </div>
        </div>
        </a>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <a href="https://www.linkedin.com/in/gowtham-reddy-3a5b2812a/" target="_blank">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={linkedin_pic}></img>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">Professional Network</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Linkedin</h1>
            <p class="leading-relaxed">I believe Connections with like minded people will always give me good learnings and opportunities to grow.feel free to connect with me on linkedin.</p>
          </div>
        </div>
        </a>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <a href="https://gowthamr221.itch.io/" target="blank">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={itchio_pic}></img>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">Games I pubished</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Platformer Games</h1>
            <p class="leading-relaxed">game development is a hobby for me. i spend my free time to explore this domain and implement in simple projects using unity3d game engine.</p>
          </div>
        </div>
        </a>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <a href="https://github.com/Gowthamr221" target="_blank">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={github_pic}></img>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">Code Repo</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Github</h1>
            <p class="leading-relaxed">I upload most of my project files to github.i explored many domains namely web dev,Android dev, Game Dev and Machine Learning.</p>
          </div>
        </div>
        </a>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <a href="https://www.codechef.com/users/gowthamr221" target="_blank">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={codechef_pic}></img>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">Coding Profile</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">CodeChef profile</h1>
            <p class="leading-relaxed">i explored problem solving on codechef platform i always try to participate when i have free time.CP contest alwasy challenge my thinking skills.</p>
          </div>
        </div>
        </a>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <a href="https://leetcode.com/sk5831/" target="_blank">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={leetcode_pic}></img>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">Coding Profile</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Leetcode</h1>
            <p class="leading-relaxed">I am trying to regularly solve leetcode problems for my interview preparation. i always try to upsolve and discuss with other fellow programmers.</p>
          </div>
        </div>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Gallery
