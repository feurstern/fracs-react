import React from "react";
import styles from "../../style";
import GetStarted from "../getStarted";
import aboutUs from '../../Assets/about-us.jpg'
import { Link } from "react-router-dom";

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
          The International Financial Modeling Institute (IFMI) is an
          organization established with a vision to facilitate the development
          of the field of financial modeling and risk management through
          education, certification, sharing, research, and practice. IFMI
          strives to promote best practices in financial modeling and risk
          management and support the continuous professional development of
          appropriate careers.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          FRAC is a certification program in financial risk for corporations.
          This certification program awards the FRAC Designation to eligible
          professionals. IFMI manages the organization of FRAC Examinations
          worldwide.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={aboutUs} alt="showcase" className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0  pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
       <GetStarted/>
      </div>
    </section>
  );
};

export default Section1;