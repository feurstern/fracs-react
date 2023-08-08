"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import { motion, useAnimation, useInView } from "framer-motion";

const Section2cer = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
    isInView ? controls.start("visible-pic") : controls.start("hidden-pic");
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1.75 }}
      className="bg-white pt-[100px]"
    >
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-black sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
            Tingkatkan Karir Anda dengan Pelatihan FRAC
          </h2>
          <p className={`${styles.paragraph} mb-4`}>
            Tingkatkan pengetahuan Anda dalam risiko keuangan perusahaan dengan
            Pelatihan FRAC kami. Pelatihan FRAC adalah prasyarat bagi Anda yang
            berencana mengambil ujian sertifikasi FRAC.{" "}
          </p>
          <p className={`${styles.paragraph} mb-4`}>
            IFMI bermitra dengan institusi penyedia pelatihan terkemuka yang
            mengadopsi kurikulum FRAC sebagai standar pelatihan mereka. Hasil
            pelatihan atau sertifikat dari penyedia pelatihan bukan merupakan
            garansi kelulusan ujian kompetensi dan tidak mempengaruhi hasil
            ujian sertifikasi FRAC. Berikut daftar Training Provider untuk
            pelatihan FRAC:
          </p>
          <p className={`${styles.paragraph}`}>
            <b>PT Rajawali Konsulindo (RJ Consulting)</b>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <motion.img
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{
              scale: 0.8,
            }}
            className="w-full rounded-lg cursor-pointer"
            src="https://e1.pxfuel.com/desktop-wallpaper/965/980/desktop-wallpaper-cappuccino-in-white-ceramic-cup-with-saucer-beside-gold-iphone-6s-and-laptop-table-thumbnail.jpg"
            alt="office content 1"
          />
          <motion.img
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{
              scale: 0.8,
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

export default Section2cer;
