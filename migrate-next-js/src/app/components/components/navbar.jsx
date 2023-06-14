'use client'
import React from 'react'
import { useState } from 'react'
import { navLinks } from '@/app/constant'
import { frac_logo, menu } from '@/app/Assets'
import styles from '@/app/style'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  //create useState to change the condition
  const[active,setActive] = useState("Home");
  const[toggle, setToggle] = useState(false);
  
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <Image src={frac_logo} alt="FRACS" className='w-[50px] h-[50px]' />
        <h1 className={`${styles.defaultHeaderFont} pl-5`}>FRAC</h1>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >        
            <Link href={`${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
            <Image src={menu} alt='menu' 
              className='w-28 h-28 object-contain'
             onClick={()=>setToggle(!toggle)}
            />
        
        
            <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
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
    
  )
}

export default Navbar
