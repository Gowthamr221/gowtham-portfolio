import React from "react";
import eventio from "./images/eventio.png"
import infrunner from "./images/infiniterunner.png"
import "./styles/style.css";
function SmallProjectCards() {
  return (
    <div>
      <section class="text-gray-400 body-font bg-gray-900">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-6 text-white">
                Personal Projects
              </h1>
              <div class="h-1 w-20 bg-purple-500 rounded"></div>
            </div>

            <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              These are few of my personal projects.  Click On Cards to see the source code in my
              github.

            </p>
          </div>

          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 animate-card p-4">
              <a
                href="https://github.com/Gowthamr221/quoteApp-reactNative"
                target="_blank"
              >
                <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://i.pinimg.com/564x/dd/d5/55/ddd555fbf2919eb4d6ed146bb6cf28c5.jpg"
                    alt="content"
                  ></img>

                  <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font">
                    Mobile App
                  </h3>

                  <h2 class="text-lg text-white font-medium title-font mb-4">
                    Quotes App
                  </h2>

                  <p class="leading-relaxed text-base">
                    Simple Quotes App made with react native displayes random
                    quote on press of button.
                  </p>
                </div>
              </a>
            </div>

            <div class="xl:w-1/4 md:w-1/2 animate-card p-4">
            <a
              href="https://github.com/Gowthamr221/CN-Project-FTP"
              target="_blank"
            >
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://st2.depositphotos.com/3265223/49959/v/380/depositphotos_499598086-stock-illustration-ftp-folder-line-icon-on.jpg?forcejpeg=true"
                  alt="content"
                ></img>
                <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font">
                  Backend
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  File Share
                </h2>
                <p class="leading-relaxed text-base">
                  Made with nodejs with multer module.Has ability to upload,search and download.
                </p>
              </div>
              </a>
            </div>
            <div class="xl:w-1/4 md:w-1/2 animate-card p-4">
            <a href="https://github.com/Gowthamr221/Event.io" target="_blank">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={eventio}
                  alt="content"
                ></img>
                <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font">
                  Frontend
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Events.io
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
              </a>
            </div>
            <div class="xl:w-1/4 md:w-1/2 animate-card p-4">
            <a href="https://github.com/Gowthamr221/Infinite-Runner" target="_blank">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={infrunner}
                  alt="content"
                ></img>
                <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font">
                  Game Dev (Unity 3D)
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Infinite Runner
                </h2>
                <p class="leading-relaxed text-base">
                  Infinite runner game with cross platform input suppourt.
                  with procedurally generated level.

                </p>
              </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmallProjectCards;
