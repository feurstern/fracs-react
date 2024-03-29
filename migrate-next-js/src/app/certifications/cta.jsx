"use client";
import React from "react";
import styles from "../style";
import { animate, motion, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Cta = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const control = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView ? control.start("visible") : control.start("hidden");
  }, [isInView, control]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={control}
      transition={{ duration: 1.5 }}
      className="bg-white"
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setIsClicked(true)}
        className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
      >
        <a
          href="/register"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
            Daftar Disini
          </span>{" "}
          <span className="text-sm font-medium">Jadilah Profesional</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1
          className={`${styles.heading2} text-black mb-4 text-4xl  tracking-tight `}
        >
          Kami Berinvestasi Pada Potensi Dunia
        </h1>
        <p
          className={`mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48`}
        >
          Professional Certification in Risk Management for Corporation.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="https://ourtoga.com/program-detail/financial-risk-analyst-for-corporation/ZmluYW5jaWFsLXJpc2stYW5hbHlzdC1mb3ItY29ycG9yYXRpb24tUFJEOTU4MTM3Nm5n"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Ketahui Lebih Lanjut
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@ourtoga9795"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg border border-black-600 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 white:text-black white:border-gray-700 white:hover:bg-gray-700 white:focus:ring-gray-800"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Tonton Video
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Cta;
