import React from "react";
import styles from "../style";

const Banner = () => {
  return (
    <div className={``}>
      <div id="banner" className={`w-full`}>
        <img
          src="https://www.corporatecomplianceinsights.com/wp-content/uploads/2012/01/risk-management.jpg"
          className="w-[100%] h-[54rem] opacity-60"
          alt="image banner"
        ></img>
      </div>
      <div
        className={`absolute ${styles.flexCenter} text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <h1
          className={`${styles.heading2} text-white cursor-pointer hover:bg-sky-400 text-red border-none rounded-lg `}
        >
          Professional Certification in Risk Management for Corporation
          {/* <Threetext/> */}
        </h1>
        {/* <p className={`${styles.paragraph} text-white`}>
          Selamat datang di situs resmi Sertifikasi FRAC!
          Program Sertifikasi FRAC adalah program sertifikasi yang dirancang khusus untuk profesional di bidang manajemen risiko keuangan. Dengan kurikulum yang terstandarisasi dan berfokus pada praktik-praktik risiko keuangan di perusahaan, Sertifikasi FRAC dapat membantu Anda meningkatkan pengetahuan, keterampilan dan kredensial Anda dalam mengelola risiko keuangan di perusahaan
        </p> */}
      </div>
    </div>
  );
};

export default Banner;
