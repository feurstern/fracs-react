"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import { motion, useAnimation, useInView } from "framer-motion";
import { Modal } from "./modal/Modal";
import { image } from "./modal/image-data";
export const Section2ga = () => {
  const len = image.length - 1;
  const getRandomNumber = () => {
    return Math.floor(Math.random() * len);
  };
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
    !isInView ? controls.start("hidden") : controls.start("visible");
  }, [isInView, controls]);
  return (
    <>
      <motion.section
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2.25 }}
        className={`pt-[50px] pb-[65px]`}
      >
        <div
          // onMouseEnter={() => setIsLoad(true)}
          // onMouseLeave={() => setIsLoad(false)}
          className={`${styles.flexCenter} pt-[10px]`}
        >
          <button
            type="button"
            className="pl-[10px] pr-[10px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:bg-blue-300"
            autoFocus
          >
            Semua Kategori
          </button>
          <button
            type="button"
            className="pl-[10px] pr-[10px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:bg-blue-300"
          >
            Pelatihan Offline
          </button>
          <button
            type="button"
            className="pl-[10px] pr-[10px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:bg-blue-300"
          >
            Pelatihan Online
          </button>
        </div>
        <div
          className={`${styles.galleryImageContainer} cursor-pointer pt-[20px]`}
        ></div>
      </motion.section>

      <Modal
        isOpen={modalOpen}
        closeModal={handleCloseModal}
        // title={data.title}
        imageSrc={image}
      />
    </>
  );
};
export default Section2ga;
