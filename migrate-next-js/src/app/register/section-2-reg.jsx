"use client";
import React from "react";
import styles from "../style";
import Link from "next/link";
import Image from "next/image";
import { motion, animate } from "framer-motion";
import { useState, useEffect } from "react";

const Section2reg = () => {
  const price = 7290000;

  return (
    <section className={`${styles.flexBetween} max-auto pt-[20px]`}>
      <motion.div
        initial={{ opacity: 0.1, scale: 0.5, x: -400 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="max-w-sm  pr-bg-white border border-gray-200 rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://media.getmyuni.com/assets/images/articles/group-discussion-topics-for-college-students.webp"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              FRAC Program Name
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            finibus lacus diam, ut ultricies nisi interdum id. Mauris imperdiet
            sapien in facilisis iaculis. Donec neque enim, auctor ut blandit id,
            imperdiet vel elit.
          </p>
          <h3 className="pt-[5px] mb-3 text-white">Price : IDR. {price}</h3>
          <a
            href="#"
            className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.1, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: [0, 0.71, 0.2, 1.01],
          duration: "1",
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://media.getmyuni.com/assets/images/articles/group-discussion-topics-for-college-students.webp"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              FRAC Program Name
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            finibus lacus diam, ut ultricies nisi interdum id. Mauris imperdiet
            sapien in facilisis iaculis. Donec neque enim, auctor ut blandit id,
            imperdiet vel elit.
          </p>
          <h3 className="pt-[5px] mb-3 text-white">Price : IDR. 7.200.000</h3>
          <a
            href="#"
            className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.1, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          ease: [0, 0.71, 0.2, 1.01],
          duration: "1",
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://media.getmyuni.com/assets/images/articles/group-discussion-topics-for-college-students.webp"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              FRAC Program Name
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            finibus lacus diam, ut ultricies nisi interdum id. Mauris imperdiet
            sapien in facilisis iaculis. Donec neque enim, auctor ut blandit id,
            imperdiet vel elit.
          </p>
          <h3 className="pt-[5px] mb-3 text-white">Price : IDR. 7.200.000</h3>
          <a
            href="#"
            className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Section2reg;
