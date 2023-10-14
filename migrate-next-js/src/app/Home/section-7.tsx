"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import Button from "../components/components/Button";
import { motion, useAnimation, useInView } from "framer-motion";
import BtnAbout from "../components/components/BtnAbout";
import BtnRegist from "../components/components/BtnRegist";
const Section7 = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  }, [isInView, controls]);
  const content =
    "Daftarkan Diri Anda untuk Sertifikasi FRAC dan Raih Kesuksesan di Bidang Manajemen Risiko";
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1.75 }}
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex  flex-col bg-black-radiant-2 rounded-[20px] box-shadow hover:shadow-3xl`}
    >
      <div className={`${styles.flexCenter}`}>
        <h2 className={`${styles.heading2}`}>{content}</h2>
      </div>
      <div className={`flex flex-1 flex-col-reverse items-center lg:flex-row `}>
        <Button />
        <BtnAbout />
        <BtnRegist />
      </div>
    </motion.section>
  );
};
export default Section7;
