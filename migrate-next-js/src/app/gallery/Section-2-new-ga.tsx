import React, { useEffect, useRef } from "react";
import styles from "../style";
import Section2ga from "./section-2-ga";
import { motion, useAnimation, useInView } from "framer-motion";
const Section2newga = () => {
  const rawTitle = "dokumentasi ujian";
  const firstIndex = 0;
  const sliceIndex = 1;
  const titleToUpperCase = (title, index, s) => {
    let arr = title.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i].charAt(index) === "f"
        ? (arr[i] = arr[i].toUpperCase())
        : (arr[i] = arr[i].charAt(index).toUpperCase() + arr[i].slice(s));
    }
    return arr.join(" ");
  };
  const title = titleToUpperCase(rawTitle, firstIndex, sliceIndex);
  // framer configuration
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  }, [useInView, ref]);
  return (
    <section
      ref={ref}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 }
      }}
      animate={controls}
      transition={{
        duration: 2.5
      }}
      className="mt-[25px] md:mt-[50px]"
    >
      <div className="px-2">
        <h1 className={`${styles.heading2}`}>{title}</h1>
      </div>
      <div>
        <Section2ga />
      </div>
    </section>
  );
};
export default Section2newga;
