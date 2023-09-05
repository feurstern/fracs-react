"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import Section6 from "./section-6";
import { feedBack } from "../constant";
import { easeOut, motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";


const Section5 = () => {
  const ref = useRef(null);
  const [hoverd, isHovered] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension)
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    }
    window.addEventListener('resize', updateDimension);
    return (() => {
      window.removeEventListener('resize', updateDimension)
    })
  }, [isInView, controls, screenSize]);



  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        ease: easeOut,
        duration: 2.25,
      }}
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-[40px]`}
    >
      <div
        onMouseEnter={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
        className="w-full flex justify-between items-center md:flex-row flex-col sm: mb-16 mb-6 relative z-[1] bg-red-600 border rounded-lg p-[15px]"
      >
        <h2 className={`${styles.heading2} text-white`}>
          Apa yang Dikatakan Orang
          <br className="sm:hidden" /> Tentang Kami {screenSize.width}
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={`${styles.paragraph}text-left max-w-[450px] text-white`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="flex-row w-full">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={`${screenSize.width > 930 ? '3' : '1'}`}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        >
          <div className={`${styles.galleryImageContainer}`}>
            {feedBack.map((card, index) => (
              <SwiperSlide key={index}>
                <Section6 {...card} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Section5;
