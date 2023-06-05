import React from 'react'
import styles from '../style'
import { frac_logo } from '../Assets'
import { otherLinks, footerLinks } from '../constant'

const Footer = () => {
  return (
    <section>
      <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className='flex-[-1] flex flex-col justify-start mr-10'>
            <img src={frac_logo} alt='frac logo' className='w-[266px] h-[72px] object-contain'/>
            <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
               Professional Certification in Risk Management for Corporation
            </p>
          </div>

          <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
           {footerLinks.map((footerlink)=>(
            <div key={footerLinks.title} className={`flex flex-col ss:my-0 my-4 min-w-p[150px]`}>
              <h4 className='font-poppins font-medium text-[18px] leading-[72px] tex-white'>
                 {footerlink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerlink.links.map((link,index)=>(
                  <li 
                     key={link.name}
                     className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}
                     >
                      {link.name}
                  </li>
                ))}
              </ul>
            </div>
           ))}
          </div>
        </div>
        
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t[#3F3E45]'>
          <p className='font-poppins font-normal text-center text-[18px] leading-[27px]'>
             Copyright Ⓒ 2023 PT. Rajawali Konsulindo. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
