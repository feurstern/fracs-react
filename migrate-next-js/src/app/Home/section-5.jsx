'use client'
import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import Section6 from "./section-6";
import { feedBack } from "../constant";
import { motion, useAnimation, useInView } from "framer-motion";

const Section5 = () => {
  const ref = useRef(null);
  const [hoverd, isHovered] = useState(false);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView ? controls.start('visible') : controls.start('hidden')
     
  } , [isInView, controls])
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden : {opacity:0, y:100},
        visible : {opacity:1, y:0}
      }}
      initial="hidden"
      animate={controls}
      transition={{duration : 2.25}}
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-[100px]`}
    >
      <div className="absolute z-[0] w-[60%] -right-[50%] rounded-full red__gradient bottom-40 "></div>

      <div 
      onMouseEnter={()=> isHovered(true)}
      onMouseLeave={()=> isHovered(false)}
      className="w-full flex justify-between items-center md:flex-row flex-col sm: mb-16 mb-6 relative z-[1] bg-red-600 border rounded-lg p-[15px]">
        <h2 className={`${styles.heading2}`}>
          What People Are <br className="sm:hidden" /> Saying About Us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph}text-left max-w-[450px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feed-back-container relative z-[1]">
        {feedBack.map((card) => <Section6 key={card.id}{...card} />)}
      </div>
    </motion.section>
  );
};

export default Section5;
