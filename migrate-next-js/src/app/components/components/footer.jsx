"use client";
import styles from "../../style";
import { frac_logo } from "../../Assets/index";
import { footerLinks, otherLinks } from "../../constant/index";
import Link from "next/link";
import Gallery from "../../gallery/page";
import Image from "next/image";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col pt-[50px]`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src="https://ourtoga.com/uploads/provider/18327095nD/product/logo_1607941798.png"
          alt="Frac Logo"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Financial Risk Analyst for Corporation Professional Certification in
          Risk Management for Corporation
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-black">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.link}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-black hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <Link href={link.link} target="_blank">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
        Copyright Ⓒ 2023 PT. Rajawali Konsulindo(RJCons). All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {otherLinks.map((oth, index) => (
          <Image
            key={oth.id}
            src={oth.icon}
            alt={oth.id}
            width={20}
            height={20}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== oth.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(oth.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
