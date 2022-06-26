import React from "react";
import { Link } from "react-router-dom";

function SocialLink(props) {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-xl font-medium title-font text-white">
              {props.socialplatform}
            </h1>
            <a href={props.url} target="_blank">
            <button class="flex-shrink-0 text-white bg-purple-500 border-0 py-2   px-8 focus:outline-none hover:bg-purple-600 rounded text-lg mt-10 sm:mt-0">
              Visit  
            </button>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialLink;
