import React, { useEffect, useRef } from "react";
import styles from "../style";
import { targetMarket } from "../constant";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { duration } from "moment";
const Section4new = () => {
  const rawSectionTitle = "siapa perlu mengambil sertifikat frac";
  /* nevermind about how persevere I am, to convert the first letter 
  to uppercase by using long script instead declare it properly on the variable heheheh
  */
  const arr = rawSectionTitle.split(" ");
  // console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    arr[i].charAt(0) === "f"
      ? (arr[i] = arr[i].toUpperCase())
      : (arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  // console.log(arr);
  const sectionTitle = arr.join(" ");

  const content =
    "FRAC menggunakan metode yang berlaku di perusahaan sehingga sangat berguna bagi Anda yang berlatar keuangan, selain itu fungsi nonfinansial seperti operasional, pemasaran dan hukum akan menerima manfaat sertifikasi ini. Sertifikasi FRAC sangat bermanfaat bagi profesi di bawah ini:";

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  }, [controls, isInView]);

  const avgStr = 17;

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 2.25 }}
      className={` ${styles.flexCenter} mt-[50px] py-4`}
    >
      <div className={`mb-[80px]`}>
        <div className="">
          <div
            className={`${styles.heading2} text-white`}
          >
            {sectionTitle}
            <p className={`${styles.paragraph} text-white`}>
                {content}
              <span className={` text-center text-white`}>
              </span>
            </p>
          </div>
        </div>
        <div className={`mt-4 ml-2 mr-2 md:grid grid-cols-3 gap-8 flex flex-col`}>
          {/* 3 div dengan space rata */}
          {targetMarket.slice(0, targetMarket.length - 2).map((data, index) => (
            <div
              key={index}
              className={`cursor-pointer bg-white rounded-lg px-2 text-l xs:text-[27px] flex gap-4 justify-start items-center h-[100px] w-[auto]`}
            >
              <svg
                className={`w-6 h-6 mr-2 text-green-500 dark:text-green-400 flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className={` text-black`}>{data}</span>
            </div>
          ))}
          {/* sisa 2 div dengan space evently */}
          {targetMarket.length > 6 && (
            <div className={`sm:flex sm:flex-col items-center md:col-span-3 md:flex md:justify-evenly`}>
              {targetMarket.slice(-2).map((data, index) => (
                <div
                  key={index}
                  className={`cursor-pointer mt-10 bg-white rounded-lg text-l xs:text-[27px] flex gap-4 justify-start items-center h-[100px] w-auto sm:h-[100px] sm:w-auto md:h-[100px] md:w-[400px]`}
                >
                  <svg
                    className={`w-6 h-6 mr-2 text-green-500 dark:text-green-400 flex-shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className={` text-black`}>{data}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Section4new;
