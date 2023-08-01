"use client";
import React, { useEffect, useRef, useState } from "react";
import styles, { card_css } from "../style";
import moment from "moment";

import { motion, useAnimation, useInView } from "framer-motion";
import Certified_person_data from "../api/post/certificationApi";
import { missingPic } from "../Assets";
import Image from "next/image";
import Pagination from "../components/components/pagination";

const Section2cer = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [hovered, isHovered] = useState(false);
  const [clicked, isClicked] = useState(false);
  const isInView = useInView(ref, { once: true });

  // get data from api
  const data = Certified_person_data();

  // set current page and data
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  // change pages func
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      className="bg-white border border-blue-300 border-2"
    >
      <div className={`flex-row ${card_css.card_box} ${styles.flexEvently}`}>
        {currentPost.map((items) => {
          let img_src;
          if (items?.upload_photo == null || items?.upload_photo == "null") {
            img_src = (
              <Image
                src={missingPic}
                alt="Picture User Certified"
                className="object-scale-down h-48 w-96"
              />
            );
          } else {
            img_src = (
              <img
                src={items?.upload_photo}
                alt="Picture User Certified"
                className="object-scale-down h-48 w-96"
              />
            );
          }
          return (
            <div className={card_css.card} key={items?.certification_id}>
              <div className={`${styles.flexCenter}`}>{img_src}</div>
              <span className="break-words"></span>
              <div className="text-center">
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
      <div className="my-2 p-2">
        <Pagination
          postPerPage={postPerPage}
          totalPost={data.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </motion.section>
  );
};

export default Section2cer;
