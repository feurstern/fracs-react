"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import { motion, useAnimation, useInView } from "framer-motion";
import { standarImparsialitas } from "../constant";
import CollapseCard from "./CollapseCard";
const Section2aboutus = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  }, [isInView, controls]);
  const randomBgColour = [
    "bg-red-600",
    "bg-sky-600",
    "bg-teal-600",
    "bg-green-600",
    "bg-cyan-600",
    "bg-purple-600"
  ];
  // const getRandomNumber = () =>
  //   Math.floor(Math.random() * randomBgColour.length - 1);
  // console.log(getRandomNumber());
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 2.5 }}
      className={`${styles.center} mt-[50px]`}
    >
      <div>
        <h1 className={`${styles.heading2} ${styles.flexCenter} mb-[50px]`}>
          Standar & Imparsialitas
        </h1>
      </div>
      <div className={``}>
        <CollapseCard />

        <div className={`mt-[10px] mb-[50px]`}>
          <p className={`${styles.paragraph} max-w-[600px]`}></p>
        </div>
      </div>
    </motion.section>
  );
};
export default Section2aboutus;
