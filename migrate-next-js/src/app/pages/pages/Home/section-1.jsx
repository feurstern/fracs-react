import React from "react";
import styles from "@/app/style";
import { GetStarted } from "..";
import { aboutUs } from "@/app/Assets";
import { Link } from "react-router-dom";
import Image from "next/image";


const Section1 = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-red-gradient rounderd-[10px] mb-2">
          <img src={``} alt="test" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-black">Register</span>
            <span className="text-black"> here</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            About IFMI
            <br className="sm:block hidden" />{" "}
            <span className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px]">
              {" "}
              International Financial Modeling Institute{" "}
            </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className=" font-poppins font-semibold text-gradient ss:text-[52px] text-[48px] ss:leading-[98px] leading-[75px]">
          Vision & Mission
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          FRAC adalah program sertifikasi yang memberikan pengakuan profesional
           berupa gelar FRAC kepada manajer risiko yang
          memiliki spesialisasi dalam menangani risiko keuangan di perusahaan. 
          Berbeda dengan manajemen risiko di bank yang telah teregulasi dengan baik, 
          manajemen risiko keuangan di lingkup korporasi masih belum terstandarisasi dan berkembang secara optimal.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Program ini dirancang untuk mengeksplorasi dan memahami berbagai risiko keuangan yang sering dihadapi oleh perusahaan. 
        Selain itu, para peserta akan dilatih untuk mengukur dan menangani berbagai jenis risiko menggunakan metodologi yang berlaku di dunia kerja.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Program sertifikasi FRAC sangat bermanfaat, tidak hanya bagi individu dengan latar belakang keuangan, 
        tapi juga bagi profesional di bidang non-finansial seperti operasional, pemasaran, dan hukum, termasuk:
        </p>
        <ul className={`${styles.paragraph} max-w-[470px]`}>
          <li> - Risk Manager in Companies</li>
          <li> - Consultant</li>
          <li>- Finance Manager and Team</li>
          <li>- FInance Analyst</li>
          <li>- Regulator</li>
          <li>- Educator</li>
          <li>- Consultant</li>
          <li>- Senior Management</li>
          <li>- Other Professional</li>
        </ul>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image src={aboutUs} alt="showcase" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0  pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Section1;