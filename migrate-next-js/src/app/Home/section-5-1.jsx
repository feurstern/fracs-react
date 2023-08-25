"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import { motion, useAnimation, useInView } from "framer-motion";

const Section51 = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [hovered, isHovered] = useState(false);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden"),
      [isInView, controls];
  });
  const rawSectionTitle = 'akreditasi frac';
  let arr = rawSectionTitle.split(' ');

  for(let i= 0; i< arr.length; i++){
    arr[i].charAt(0) === 'f' ? arr[i] = arr[i].toUpperCase() : arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1) 
  }
  const sectionTitle = arr.join(" ");

  const content = 'FRAC telah memperoleh akreditasi penuh dari KAN, yang merupakan organisasi pemerintah Indonesia yang berwenang untuk memberikan akreditasi bagi Badan Sertifikasi Orang di Indonesia. Dengan akreditasi ini, person dengan sertifikasi FRAC memiliki nilai yang diakui dan dihargai di industri manajemen risiko keuangan perusahaan.'


  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100},
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 2.75, delay: 0.5 }}
      className={` pt-[75px]`}
    >
      <div
        onMouseEnter={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
        className={`${styles.flexCenter}`}
      >
        <h1 className={`${styles.heading2}`}>
          {sectionTitle}
        </h1>
      </div>
      <div className={`${styles.flexCenter} py-5`}>
        <img
          src="https://www.sahabatmutuindonesia.com/wp-content/uploads/2021/04/LOGO-KOMITE-AKREDITASI-NASIONAL.jpg"
          height="320px"
          width="320px"
          className="border rounded-lg cursor cursor-pointer"
        />
      </div>
      <div className={`bg-blue-500 border rounded-lg p-[15px] `}>
        <p className={`${styles.paragraph} mt-4 mb-4 text-white`}>
         {content}
        </p>
      </div>
    </motion.section>
  );
};

export default Section51;
