"use client";
import React, { useEffect, useRef, useState } from "react";
import { quotes } from "../Assets";
import styles from "../style";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const Section6 = ({ content, name, title, img }) => {
  const ref = useRef(null);
  const [hovered, isHovered] = useState(false);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 2.25,
      }}
      onMouseEnter={() => isHovered(true)}
      onMouseLeave={() => isHovered(false)}
      className={`${styles.flexCenter} flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[360px] md:mr-10 sm:mr-5 mr-0 my-5 feed-back-card hover:bg-sky-500 hover:text-white`}
    >
      <Image
        src={quotes}
        alt="quotes svg"
        className="w-[42.6px] h-[27px] object-contain"
      />
      <p className={`${styles.paragraph} my-10`}>
        {content}
      </p>
      <div className="flex flex-row">
        <img
          src={img}
          alt="people"
          className="w-[48px] h-[48px] rounded-full border-[2.1px] border-black"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[26px] leading-[32px]">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[18px] leading-[24px]">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Section6;
