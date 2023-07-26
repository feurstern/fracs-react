"use client";
import React from "react";
import styles from "../style";
// import { GetStarted } from "..";
import { aboutUs } from "../Assets";
import { Link } from "react-router-dom";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
// import ThreeText from "./Threetext";
// import { Canvas } from "@react-three/fiber";

const Section1 = () => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  // to get a fucking value from the mouse coordinate to trigger the animation and prevent it starts during on load.
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  }, [isInView, controls]);

  const numbers = [
    {
      number: "087741206863 ",
      link: "https://api.whatsapp.com/send/?phone=6287741206863&text&type=phone_number&app_absent=0",
    },
    {
      number: "085880500875",
      link: "https://api.whatsapp.com/send/?phone=6285880500875&text&type=phone_number&app_absent=0",
    },
    {
      number: '081385913098',
      link: 'https://api.whatsapp.com/send/?phone=6281385913098&text&type=phone_number&app_absent=0'
    },
    {
      number: '088294712616',
      link: 'https://api.whatsapp.com/send/?phone=6288294712616&text&type=phone_number&app_absent=0'
    }
  ]

  const len = numbers.length - 1;

  const getRandomNumber = () => {
    return Math.floor(Math.random() * len);
  }

  const generateWhatsNumber = () => {
    let index = getRandomNumber();
    numbers[index].link;
    console.log(index);
  }

  // console.log(generateWhatsNumber());
  // console.log(numbers[0].link)

  return (
    <motion.section
      className={`flex flex-row md:flex-col ${styles.paddingY}`}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1.75 }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            About IFMI
            <br className="sm:block hidden" />{" "}
            <span className="font-poppins font-semibold ss:text-[54px] text-[48px] text-black ss:leading-[100px] leading-[75px]">
              {" "}
              International Financial Modeling Institute{" "}
            </span>
            {/* <Canvas>
              <ThreeText/>
            </Canvas> */}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            {<GetStarted /> }
          </div> */}
        </div>
        <div>
          <h1 className=" font-poppins font-semibold text-gradient ss:text-[52px] text-[48px] ss:leading-[98px] leading-[75px]">
            Vision & Mission
          </h1>
          <div className="flex justify-content:space-between gap-6">
            <div className="flex-col">
              <p className={`${styles.paragraph} max-w-[540px]`}>
                FRAC adalah program sertifikasi yang memberikan pengakuan
                profesional berupa gelar FRAC kepada manajer risiko yang
                memiliki spesialisasi dalam menangani risiko keuangan di
                perusahaan. Berbeda dengan manajemen risiko di bank yang telah
                teregulasi dengan baik, manajemen risiko keuangan di lingkup
                korporasi masih belum terstandarisasi dan berkembang secara
                optimal.
              </p>
              <br />
              <p className={`${styles.paragraph} max-w-[540px] mt-5`}>
                Program ini dirancang untuk mengeksplorasi dan memahami berbagai
                risiko keuangan yang sering dihadapi oleh perusahaan. Selain
                itu, para peserta akan dilatih untuk mengukur dan menangani
                berbagai jenis risiko menggunakan metodologi yang berlaku di
                dunia kerja.
              </p>
            </div>
            <div
              className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 md:flex-nowrap relative`}
            >
              <Image
                src={aboutUs}
                alt="showcase"
                className="max-w-[350px] max-h-[500px]  blur-none relative z-[5]"
              />
              <Image
                src={aboutUs} 
                alt="showcase"
                className="w-full max-h-[500px] blur absolute"
              />
              <div className="absolute z-[0] w-[40%] h-[35%] top-0  pink__gradient" />
              <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>
          </div>

          <p className={`${styles.paragraph} w-full mt-10 pt-10`}>
            Program sertifikasi FRAC sangat bermanfaat, tidak hanya bagi
            individu dengan latar belakang keuangan, tapi juga bagi profesional
            di bidang non-finansial seperti operasional, pemasaran, dan hukum,
            termasuk:
          </p>
          <div className="flex justify-evenly mt-5">
            <div className={`${styles.paragraph}`}>
              <li> Risk Manager in Companies</li>
              <li> Consultant</li>
              <li> Finance Manager and Team</li>
              <li> FInance Analyst</li>
              <li> Regulator</li>
            </div>
            <div className={`${styles.paragraph}`}>
              <li> Educator</li>
              <li> Consultant</li>
              <li> Senior Management</li>
              <li> Other Professional</li>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <a href={numbers[getRandomNumber()].link} target="_blank"> 
          <button className="bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-5">
            {/* <img src={null} alt="test" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 448 512"
              className="mr-2"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            <span> Register Here</span>
          </button>
          </a>
        </div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <GetStarted /> */}
      </div>
    </motion.section>
  );
};

export default Section1;
