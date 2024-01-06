"use client";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { image } from "./modal/image-data";
import Link from "next/link";

const Imageslide = () => {
  let index = 0;

  const getCurrentSession = 3;


  useEffect(() => {
    var getImageData = document.getElementById("img-data");
    // console.log(`getImageData : ${getImageData}`);
    var prevBtn = document.getElementById("btn-prev");
    var nextBtn = document.getElementById("btn-next");
    // console.log(`The value of prevBtn : ${prevBtn}`);
    // console.log(`The value of nextBtn : ${nextBtn}`);

    const carousel = () => {
      getImageData.src = image[index].src;
    };

    prevBtn.addEventListener("click", () => {
      index--;
      index < image.length - 1 ? (index = 0) : 0;
      carousel();
      // alert('clicked!')
    });

    nextBtn.addEventListener("click", () => {
      index++;
      index > image.length - 1 ? (index = 0) : 0;
      carousel();
      // alert('clicked!')
    });
  });

  if (getCurrentSession != 3) {

    return (
      <div className="flex justify-content-center m-2">
        <h1 className="text-5 font-">No current image selected</h1>
        <button><link href="/"> Back to </link></button>
      </div>
    );

  }
  else {

    return (
      <AnimatePresence className=" ">
        <div id="gallery" className={``}>
          <div className=" relative h-56 rounded-lg md:h-96">
            {/* image.map((data) => ( */}
            <div
              key={""}
              className=" duration-700 ease-in-out"
              data-carousel-item
            >
              <img
                id="img-data"
                src={image[0].src}
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={""}
              />
            </div>
            {/* )) */}
          </div>

          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            id="btn-prev"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            id="btn-next"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </AnimatePresence>
    );
  }


};

export default Imageslide;
