import React from "react";

function ContactComponent() {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Me
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel Free to connect with me on linkedin for starting up a
              conversation with me. if you want communicate me formally you
              could always email me to the below link.{" "}
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-full">
              <a href="mailto:gowthamr221@gmail.com">
                <button class="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Send Email
                </button>
                </a>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <a class="text-purple-400">gowthamr221@gmail.com</a>
                <p class="leading-normal my-5">Andhra Pradesh<br/>India</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactComponent;
