"use client";
import React, { useEffect, useRef, useState } from "react";
import styles, { card_css } from "../style";
import Image from "next/image";
import { office1, office2 } from "../Assets";
import { motion, useAnimation, useInView } from "framer-motion";

const Section2cer = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [hovered, isHovered] = useState(false);
  const [clicked, isClicked] = useState(false);
  const isInView = useInView(ref, { once: true });

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
        <div className={`${card_css.card} flex-col`}>
          <div className="border border-cyan border-2">
            <img
              src="https://news.dolanyok.com/wp-content/uploads/2023/02/3-competitive-intelligence-factors.jpg"
              alt="test picture"
            />
          </div>
          <div className="border border-purple border-2">
            <span className="break-words">
              dmknlknawdklmnawkdnmklmawdklmawdkmwdddklawmdklawmdkawmdklwmadklmawkl
            </span>
          </div>
        </div>
        <div className={`border boder-black border-2 ${card_css.card}`}>
          HADSKSHJADHSDKHSKADHKAS
          <br />
        </div>
        <div className={`border boder-black border-2 ${card_css.card}`}>
          HADSKSHJADHSDKHSKADHKAS
          <br />
        </div>
        <div className={`border boder-black border-2 ${card_css.card}`}>
          HADSKSHJADHSDKHSKADHKAS
          <br />
        </div>
        <div className={`border boder-black border-2 ${card_css.card}`}>
          HADSKSHJADHSDKHSKADHKAS
          <br />
        </div>
      </div>
    </motion.section>
  );
};

export default Section2cer;
