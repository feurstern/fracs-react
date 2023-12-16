import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import { motion, useAnimation, useInView } from "framer-motion";
const Section1ga = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [clicked, isClicked] = useState(false);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  }, [isInView, controls]);
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
      className={`pt-[50px]`}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => isClicked(true)}
        className={`${styles.flexCenter}`}
      >
        <h1 className={`${styles.heading2} ${styles.flexCenter}`}>Gallery</h1>
      </div>

      <div className={`pt-[10px]`}>
        <p className={`${styles.paragraph}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className={`tp-[10px]`}></div>
    </motion.section>
  );
};
export default Section1ga;
