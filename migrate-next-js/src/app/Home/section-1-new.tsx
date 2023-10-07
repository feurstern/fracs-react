"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import { motion, useAnimation, useInView } from "framer-motion";
const Section1new = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
    isInView ? controls.start("visible-pic") : controls.start("hidden-pic");
  }, [isInView, controls]);
  const sectionTitle = "Sekilas Tentang FRAC";
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1.75 }}
      className="bg-white pt-[100px]"
    >
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-black sm:text-lg">
          <h1 className={`mb-0 ${styles.heading2}`}>{sectionTitle}</h1>
          <p className={`${styles.paragraph} mb-4`}>
            Sertifikasi FRAC adalah sertifikasi profesional dalam manajemen
            risiko untuk perusahaan. Tujuan dari sertifikasi FRAC adalah
            memberikan gelar profesional kepada para ahli dan manajer manajemen
            risiko yang memiliki keahlian dalam menangani risiko. Program
            sertifikasi ini memiliki kurikulum khusus dan skema sertifikasi.
            Memperoleh sertifikasi FRAC dapat membantu individu menunjukkan
            pengetahuan dan keahlian mereka dalam manajemen risiko, yang dapat
            membuka peluang kemajuan karier dan meningkatkan kredibilitas di
            bidang tersebut.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <motion.img
            whileHover={{
              scale: 1.2
            }}
            whileTap={{
              scale: 0.8
            }}
            className="w-full rounded-lg cursor-pointer"
            src="https://e1.pxfuel.com/desktop-wallpaper/965/980/desktop-wallpaper-cappuccino-in-white-ceramic-cup-with-saucer-beside-gold-iphone-6s-and-laptop-table-thumbnail.jpg"
            alt="office content 1"
          />
          <motion.img
            whileHover={{
              scale: 1.2
            }}
            whileTap={{
              scale: 0.8
            }}
            className="mt-4 w-full lg:mt-10 rounded-lg cursor-pointer"
            src="https://e0.pxfuel.com/wallpapers/6/594/desktop-wallpaper-studygram.jpg"
            alt="office content 2"
          />
        </div>
      </div>
    </motion.section>
  );
};
export default Section1new;
