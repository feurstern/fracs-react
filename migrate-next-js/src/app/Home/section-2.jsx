"use client";
import { runDown } from "../constant";
import styles, { layout } from "../style";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== runDown.length - 1 ? "mb-6" : "mb-0"
    }`}
  >
    <div className={`${styles.circleDiv}`}>
      <Image src={icon} alt="star" className="w-[50%] h-[50%]" />
    </div>
    <div className={`${styles.flexStart}flex-1 flex flex-col ml-12 mr-12`}>
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Section2 = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  const [hovered, isHovered] = useState(false);
  const [clicked, isClicked] = useState(false);

  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  });

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 1.75,
      }}
      id="features"
      className={`flex-1 flex flex-col mt-[25px]`}
    >
      <div>
        <h2 className={styles.heading2}>
          Kurikulum <br /> FRAC
        </h2>
      </div>
      <div
        onMouseEnter={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
        onClick={() => isClicked(true)}
        className={`${layout.sectionInfo} col-md-12`}
      >
        <div className="col-md-6">
          <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
            International Financial Modeling Institute (IFMI) mengembangkan
            Financial Risk for Corporation (FRAC) sebagai sebuah program
            sertifikasi dengan spesialisasi dalam menangani risiko keuangan di
            perusahaan. Kurikulum Sertifikasi FRAC dirancang khusus untuk
            membantu Anda mencapai tujuan tersebut. Kurikulum ini merupakan
            perpaduan dari ilmu pengetahuan yang terkini dan pengalaman praktis
            profesional, membuatnya sangat aplikatif dan efektif dalam situasi
            dunia nyata.
          </p>
          <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
            Untuk menjadi kandidat FRAC, Anda diwajibkan untuk mengikuti
            pelatihan yang diselenggarakan oleh Training Partner IFMI. Pelatihan
            ini menjadi prasyarat untuk mengikuti ujian sertifikasi FRAC
            sekaligus memastikan standar materi program yang diterima setiap
            kandidat FRAC.
          </p>
          <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
            Ujian sertifikasi FRAC berupa ujian dengan 100 soal yang harus
            diselesaikan dalam waktu 2,5 jam. Peserta harus mencapai skor 60
            untuk lulus ujian. Ujian dilakukan secara online. Ujian sertifikasi
            FRAC memberikan kesempatan kepada kandidat FRAC dapat mengulang
            kembali ujian sertifikasi FRAC bilamana belum lulus ujian.
          </p>
          <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
            Salah satu acuan yang menjadi dasar pengembangan FRAC adalah
            pengalaman IFMI mengelola program sertifikasi Professional Financial
            Modeler (PFM) yang telah terlebih dahulu dikembangkan dan
            mendapatkan akreditasi global dari IAS (Amerika) dan KAN
            (Indonesia).
          </p>
          <p className={`${styles.paragraph} max-w-[600px] mt-5`}></p>
          <h2 className={`${styles.heading3} mt-[20px]`}>
            Tentang Sertifikasi FRAC
          </h2>
          <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
            FRAC adalah program sertifikasi yang memberikan gelar profesional
            FRAC kepada profesional risiko dan manajer yang memiliki keahlian
            dalam menangani risiko keuangan di perusahaan. Berbeda dengan bank
            yang diatur dengan ketat, manajemen risiko keuangan di perusahaan
            tidak dikembangkan dengan baik dan kurikulumnya tidak
            distandarisasi.
          </p>
          <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
            Kurikulum ini dirancang untuk mengeksplorasi risiko keuangan yang
            ada di sebagian besar perusahaan. Peserta juga akan belajar mengukur
            dan mengatasi risiko keuangan korporasi.
          </p>
        </div>
        <div className={`flex-col col-md-6 `}>
          {runDown.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Section2;
