"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import { motion, useAnimation, useInView } from "framer-motion";

const Section1cer = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  // const [hovered, ishHovered] = useState(false);
  const isInView = useInView(ref, { once: true });
  // const [clicked, isClicked] = useState(false);

  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 2.5 }}
      className={`${styles.center} mt-[75px]`}
    >
      <motion.div>
        <h1 className={`${styles.heading2} ${styles.flexCenter} mb-[50px]`}>
          Daftar Orang Bersertifikat
        </h1>
      </motion.div>
    </motion.section>
  );
};

export default Section1cer;
