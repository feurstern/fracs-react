"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style";

import { motion, useAnimation, useInView } from "framer-motion";

const Section1aboutus = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 2.5 }}
      className={`${styles.center} mt-[50px]`}
    >
      <div>
        <h1 className={`${styles.heading2} ${styles.flexCenter} mb-[50px]`}>
          Standar & Imparsialitas
        </h1>
      </div>
      <div className={``}>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={`cursor-pointer bg-red-600 max-w-[600px] p-[10px] border rounded-lg`}
        >
          <p
            className={`${styles.paragraph} mt-[10px] max-w-[600px] text-white`}
          >
            IFMI berkomitmen penuh menjaga standar dan keadilan dalam seluruh
            proses sertifikasi FRAC. Kami berupaya untuk memastikan keadilan dan
            netralitas dengan menerapkan kebijakan dan prosedur yang ketat.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={`cursor-pointer flex justify-end items-end text-white mt-[10px]`}
        >
          <p
            className={`${styles.paragraph} mt-[20px] max-w-[600px] bg-blue-600 p-[10px] border rounded-lg text-white`}
          >
            Kemitraan strategis dengan Training Partner IFMI ada untuk menjamin
            kualitas dan standar FRAC. Training Partner IFMI membantu para
            Kandidat FRAC menjadi siap menghadapi ujian sertifikasi dengan
            pelatihan berbasis kurikulum FRAC. Namun, IFMI selalu berdiri netral
            dan tidak memberikan kompensasi dalam bentuk apapun kepada Training
            Partner terkait partisipasi Kandidat FRAC.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={`cursor-pointer mt-[10px] max-w-[600px] bg-green-600 text-white border rounded-lg`}
        >
          <p className={`${styles.paragraph} p-[10px] text-white`}>
            Kewenangan mutlak dalam menentukan kelulusan Kandidat FRAC ada di
            tangan IFMI yang memutuskan secara mandiri apakah seorang Kandidat
            memenuhi standar dan kompetensi sebagai Person Tersertifikasi FRAC.
            Termasuk dalam hal mencabut atau menarik sertifikat FRAC.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={`cursor-pointer flex justify-end items-end p-[10px]`}
        >
          <p
            className={`${styles.paragraph} p-[10px] text-white max-w-[600px] bg-cyan-600 border rounded-lg`}
          >
            Penting bagi IFMI untuk menjaga kerahasiaan semua data dan informasi
            dari para peserta dan Person Tersertifikasi FRAC. Informasi tersebut
            tidak akan disebarkan kecuali diwajibkan oleh hukum.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={`cursor-pointer mt-[10px] max-w-[600px] bg-violet-600 border rounded-lg`}
        >
          <p className={`${styles.paragraph} text-white p-[10px]`}>
            IFMI secara proaktif mengidentifikasi dan meminimalisir risiko
            terhadap standar dan netralitas, serta menyelesaikan konflik yang
            mungkin muncul. Kami sangat terbuka untuk menerima masukan dari
            pihak ketiga terkait prinsip keadilan, netralitas, dan kerahasiaan.
            Anda dapat mengirimkan masukan tersebut melalui halaman Contact Us.
          </p>
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          className={`cursor-pointer flex justify-end items-end pt-[10px]`}
        >
          <p
            className={`${styles.paragraph} max-w-[600px] bg-rose-600 text-white border rounded-lg p-[10px]`}
          >
            Sekalipun kami bekerja sama dengan penyedia pelatihan yang
            menggunakan BOK atau kurikulum kami sebagai acuan, harap diingat
            bahwa hasil pelatihan atau sertifikat dari mereka bukan indikator
            kompetensi, jaminan kelulusan ujian, dan tidak berpengaruh pada
            keputusan ujian program sertifikasi IFMI.
          </p>
        </motion.div>
        <div className={`mt-[10px] mb-[50px]`}>
          <p className={`${styles.paragraph} max-w-[600px]`}></p>
        </div>
      </div>
      {/*  run error when I want to use map for the array*/}
      {/* <div className=''>
      {standarImparsialitas.map((data,index)=>(  
       <Section1cer key={data.id} {...data} index={index}/>
      ))} 
      </div> */}
    </motion.section>
  );
};

export default Section1aboutus;
