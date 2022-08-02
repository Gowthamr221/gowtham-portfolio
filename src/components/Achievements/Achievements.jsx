import React from "react";

function Achievements() {
  return (
    <div>
      <section class="text-gray-400 mx-auto bg-gray-900 body-font">
        <div class="container px-5 mx-auto  py-20  flex flex-wrap">
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                <img
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                   src="https://1000logos.net/wp-content/uploads/2017/05/emblem-Paypal.jpg"
                  alt="WIP"
                ></img>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-white mb-1 text-xl">
                  SWE Intern{" "}
                  <h2
                    className="font-sm font-extralight"
                    style={{ opacity: "60%" }}
                  >
                    @Paypal 
                  </h2>
                </h2>
                <p class="leading-relaxed">
                  Incoming Intern at paypal Banglore. 
                   
                   <pre>            {/*intentional blankspace to avoid distorition*/ }                                    </pre></p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                <img
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                  src="data:image/png;base64,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"
                ></img>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-white mb-1 text-xl">
                  Route Mobile Rapid Api
                  <h2
                    className="font-sm font-extralight"
                    style={{ opacity: "60%" }}
                  >
                    @Hackathon
                  </h2>{" "}
                </h2>
                <p class="leading-relaxed">
                  Secured under 40 global team rank in Rapid Api hackathon
                  conducted on Hacker Earth where we had to use rapid api end
                  points provided to make a Health Care application{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                <img
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQGGZ4iDhWOBBw/company-logo_200_200/0/1638896167163?e=1664409600&v=beta&t=zPGgHiZJulIZ6xqmLszIEVK2Q3PNnh1GJ24b8hBLAW8"
                ></img>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-white mb-1 text-xl">
                  Web Dev Intern{" "}
                  <h2
                    className="font-sm font-extralight"
                    style={{ opacity: "60%" }}
                  >
                    @Creamzo
                  </h2>
                </h2>
                <p class="leading-relaxed">
                  Worked as Web dev intern in a banglore based startup, where i
                  was contributing in frontend development building for social
                  media site UI and website components using
                  HTML,CSS,JS,NodeJs,ReactJs and MongoDB{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                <img
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                  src="https://static.uacdn.net/thumbnail/external-app-icons/ce4fd2180646452aa0b03c3ffa3ef8e2.png"
                ></img>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-white mb-1 text-xl">
                  Core Team Member
                  <h2
                    className="font-sm font-extralight"
                    style={{ opacity: "60%" }}
                  >
                    @codeChefSrm
                  </h2>{" "}
                </h2>
                <p class="leading-relaxed">
                  Worked with UI/UX teams in frontend development. Built and
                  managed Discord Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Achievements;
