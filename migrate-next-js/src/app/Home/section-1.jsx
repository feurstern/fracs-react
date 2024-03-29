"use client";
import React from "react";
import styles from "../style";
import { aboutUs } from "../Assets";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Button from "../components/components/Button";

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
      number: "081385913098",
      link: "https://api.whatsapp.com/send/?phone=6281385913098&text&type=phone_number&app_absent=0",
    },
    {
      number: "088294712616",
      link: "https://api.whatsapp.com/send/?phone=6288294712616&text&type=phone_number&app_absent=0",
    },
  ];

  const len = numbers.length - 1;

  const getRandomNumber = () => {
    return Math.floor(Math.random() * len);
  };

  const generateWhatsNumber = () => {
    let index = getRandomNumber();
    numbers[index].link;
    // console.log(index);
  };

  const sectionTitle = "Tentang Sertifikasi FRAC";

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
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[80px] leading-[45px]">
            <br className="sm:block hidden" />{" "}
            <span className="font-poppins font-semibold ss:text-[40px] text-[29px] text-black ss:leading-[80px] leading-[45px]">
              {sectionTitle}
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
            {/*  this is sub title of the website.*/}
          </h1>
          <div className="flex flex-col overflow-x-scroll sm:flex-row flex-wrap mb-4 mx-2">
            <div className="flex-col sm:w-1/2">
              {/* just add the tag of p, if you want to create another section of paragraph*/}
              <p className={`${styles.paragraph} max-w-[540px]`}>
                Sertifikasi FRAC adalah sertifikasi profesional dalam manajemen
                risiko untuk perusahaan. Tujuan dari sertifikasi FRAC adalah
                memberikan gelar profesional kepada para ahli dan manajer
                manajemen risiko yang memiliki keahlian dalam menangani risiko.
                Program sertifikasi ini memiliki kurikulum khusus dan skema
                sertifikasi. Memperoleh sertifikasi FRAC dapat membantu individu
                menunjukkan pengetahuan dan keahlian mereka dalam manajemen
                risiko, yang dapat membuka peluang kemajuan karier dan
                meningkatkan kredibilitas di bidang tersebut.
              </p>
              <br />
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

          {/* <p className={`${styles.paragraph} w-full mt-10 pt-10`}>
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
          </div> */}
        </div>
        <div className="w-full text-center">{<Button />}</div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <GetStarted /> */}
      </div>
    </motion.section>
  );
};

export default Section1;
