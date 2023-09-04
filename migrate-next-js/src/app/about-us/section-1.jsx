"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import { motion, useAnimation, useInView } from "framer-motion";
import { aboutIfmi } from "../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Section1aboutus = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [hovered, isHovered] = useState("false");
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  }, [isInView, controls]);

  const rawTitle = "tentang ifmi";
  let arr = rawTitle.split(" ");
  const firstIndex = 0;
  const sliceIndex = 1;

  for (let i = 0; i < arr.length; i++) {
    arr[i].charAt(firstIndex) === "i"
      ? (arr[i] = arr[i].toUpperCase())
      : (arr[i] =
          arr[i].charAt(firstIndex).toUpperCase() + arr[i].slice(sliceIndex));
  }

  const title = arr.join(" ");

  //   console.log(title);
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      animate={controls}
      initial="hidden"
      transition={{
        duration: 2.25,
      }}
      className={`my-4`}
    >
      <div className={`${styles.flexCenter} text-center`}>
        <h1 className={`${styles.heading2}`}>{title}</h1>
      </div>
      <div
        className={`py-4 border-8  border-black  rounded-lg mt-4 flex-col w-full`}
      >
        {aboutIfmi.map((data, index) => (
          <div className="flex mx-auto px-4" key={index}>
            <p className={`${styles.paragraph} mx-4 my-4`}>{data.text}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Section1aboutus;
