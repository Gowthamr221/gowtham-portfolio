import React from "react";
import { Link } from "react-router-dom";
import profile_image from "./image/gowtham.jpg";
import raster_image from "./image/profilepic.png";
import "./styles/style.css";
function HeroComponent() {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello World! <br />I am Gowtham Reddy
              {/* <br class="hidden lg:inline-block">readymade gluten</br> */}
            </h1>
            <p class="mb-8 text-sm leading-relaxed">
              {" "}
              Aspiring software developer, curious in solving problems with my
              programming skills.I am experienced in developing web applications
              using reactjs, nodejs, mongoDB and express along with good
              understanding of UI/UX Design Principles.I love to explore other
              fields like App Development, Scripting and Game Development.
            </p>
            <br />
            <br />
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                <Link to="/contactme">
                Connect
                </Link>
              </button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                <Link to="/projects">
                Know More
                </Link>
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              className="profile_pic mx-auto"
              src={raster_image}
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroComponent;
