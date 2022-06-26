import React from 'react'

function StatsDisplay() {
  return (
    <div>
        <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-5 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Github Stats</h1>

      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Stats Displayed from my github account</p>
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <img class="mx-auto w-12 h-12 mb-3" src="https://img.icons8.com/fluency/96/000000/apps-tab.png"/>
          <h2 class="title-font font-medium text-3xl text-white">15+</h2>
          <p class="leading-relaxed">Mini Projects</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <img class="mx-auto w-12 h-12 mb-3" src="https://img.icons8.com/fluency/96/000000/group-task.png"/>
          <h2 class="title-font font-medium text-3xl text-white">5+</h2>
          <p class="leading-relaxed">Collaborated Projects</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <img class="mx-auto w-12 h-12 mb-3" src="https://img.icons8.com/fluency/96/000000/source-code.png"/>
          <h2 class="title-font font-medium text-3xl text-white">300+</h2>
          <p class="leading-relaxed">Problems Solved</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <img class="mx-auto w-12 h-12 mb-3" src="https://img.icons8.com/fluency/96/000000/share--v2.png"/>
          <h2 class="title-font font-medium text-3xl text-white">400+</h2>
          <p class="leading-relaxed">Contributions</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default StatsDisplay
