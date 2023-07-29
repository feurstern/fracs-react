"use client";
import React, { useEffect, useRef, useState } from "react";
import styles, { card_css } from "../style";
import moment from "moment";

import { motion, useAnimation, useInView } from "framer-motion";
import Certified_person_data from "../api/post/certificationApi";
import { missingPic } from "../Assets";

const Section2cer = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [hovered, isHovered] = useState(false);
  const [clicked, isClicked] = useState(false);
  const isInView = useInView(ref, { once: true });

  const data = Certified_person_data();

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
      className="bg-white"
    >
      <div className={`flex-row justify-content-around ${card_css.card_box}`}>
        {data.map((items) => {
          return (
            <div className={card_css.card} key={items?.certification_id}>
              <div className={`${styles.flexCenter}`}>
                <img
                  className={"object-cover max-w-[150px]"}
                  src={items?.upload_photo ? items?.upload_photo : missingPic}
                  alt="Picture User Certified"
                />
              </div>
              <span className="break-words"></span>
              <div className="">
                <span className="break-words">{`${items?.given_to}, FRAC`}</span>
                <br />
                <span className="break-words">{`Expired On : ${moment(
                  items?.expire_date
                ).format("DD-MM-yyyy")}`}</span>
              </div>
              <div className={styles.flexCenter}>
                <a
                  className={styles.buttonPrimary}
                  href={items?.certified_link}
                >
                  View Certified Person Profile
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Section2cer;
