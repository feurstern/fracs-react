import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "../style";
import { reasonsData } from "../constant";
const Section3new = () => {
  const rawsectionTitle = "mengapa mengambil sertifikasi frac";
  const arr = rawsectionTitle.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i].charAt(0) === "f"
      ? (arr[i] = arr[i].toUpperCase())
      : (arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  let sectionTitle = arr.join(" ");
  let content =
    "Memiliki sertifikasi FRAC dapat memberikan beberapa manfaat bagi professional di bidang manajemen risiko, antara lain sebagai berikut:";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [hovered, isHovered] = useState(false);
  useEffect(() => {
    {
      isInView ? controls.start("visible") : controls.start("hidden");
    }
  });
  const randomBgColour = [
    "bg-sky-600",
    "bg-red-600",
    "bg-purple-600",
    "bg-emerald-600",
    "bg-cyan-600",
    "bg-lime-600"
  ];
  const getRandomNumber = () => {
    return Math.floor(Math.random() * randomBgColour.length - 1);
  };
  useEffect(() => {
    getRandomNumber();
  }, [getRandomNumber]);
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 3.5
      }}
      className="border-4 my-6 border-black border-dashed rounded-xl"
    >
      <motion.section className="py-4 mr-2 pt-[25px] ml-2">
        <div className={`${styles.flexCenter}`}>
          <h1 className={`${styles.heading2} py-2`}>{sectionTitle}</h1>
        </div>
        <p className={`${styles.paragraph} py-2`}>{content}</p>
        {reasonsData.map((data, index) => (
          <motion.div
            key={data.id}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="cursor-pointer"
          >
            <ul className={`pr-2 px-2 py-4  ${styles.flexBetween}`}>
              <h2 className={`${styles.heading3} px-2`}>{index + 1}.</h2>
              <li
                className={`${randomBgColour[index]} text-white rounded-lg pt-2 pl-2 pr-2 py-4 mb-0 mt-0 border-2 border-white border-dashed `}
              >
                <span className={`${styles.paragraph} text-white`}>
                  {data.content}
                </span>
              </li>
            </ul>
          </motion.div>
        ))}
      </motion.section>
    </motion.section>
  );
};
export default Section3new;
