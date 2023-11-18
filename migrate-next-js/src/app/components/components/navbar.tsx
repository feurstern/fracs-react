"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "../../constant/index";
import { menu } from "../../Assets/index";
import styles from "../../style";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const pathname = usePathname().substring(1, 99);
  // console.log("===> pathname", pathname);
  let url;
  if (pathname == "") {
    url = "Home";
  } else if (pathname == "certifications") {
    url = "Certifications";
  } else if (pathname == "gallery") {
    url = "Gallery";
  } else if (pathname == "register") {
    url = "Register";
  }
  const headerTitle = "Financial Risk Analyst for Corporation";
  const headerLength = headerTitle.length - 1;
  const navLinkLength = navLinks.length - 1;
  // console.log("===> url", url);
  //create useState to change the condition
  const [active, setActive] = useState(`${url}`);
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src="https://ourtoga.com/uploads/provider/18327095nD/product/logo_1607941798.png"
        alt="FRACS"
        className=" w-[40px] h-[40px] xs:w-[85px] xs:h-[85px] "
      />
      <h1
        className={`${styles.defaultHeaderFont} text-white pl-5
      ${headerLength > navLinkLength ? "mr-12" : "mr-0"}
      ${headerLength > navLinkLength ? "text-[10px]" : 0}
      `}
      >
        <Link href={"/"}></Link>
        {headerTitle}
      </h1>
      <ul className="list-none text-xl font-semibold sm:flex hidden justify-between items-between flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold cursor-pointer ml-2 ${
              styles.defaultNavLinkFont
            } text-center  $
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link className="text-white" href={`${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={menu}
          alt="menu"
          className="w-14 h-14 object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[100px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
