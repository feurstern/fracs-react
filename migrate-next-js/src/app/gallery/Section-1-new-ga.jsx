'use client'
import React from 'react'
import styles from '../style'
import { motion } from 'framer-motion'
import BtnDownload from '../components/components/BtnDownload'
import Iframe from 'react-iframe';


const Section1newga = () => {
  const rawTitle = 'pustaka';
  const rawSubTitle = 'frac certification guideline';

  const firstIndex = 0;
  const sliceIndex = 1;

  const titleToUpperCase = (title, index, s) => {
    let arr = title.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i].charAt(index) === 'f' ? arr[i] = arr[i].toUpperCase() : arr[i] = arr[i].charAt(index).toUpperCase() + arr[i].slice(s);
    }
    return arr.join(' ');

  }
  const title = titleToUpperCase(rawTitle, firstIndex, sliceIndex);
  const subTitle = titleToUpperCase(rawSubTitle, firstIndex, sliceIndex);

  return (
    <section className={`mt-[25px] md:mt-[50px]`}>
      <div className='px-2'>
        <h1 className={`${styles.heading2}`}>
          {title}
        </h1>
      </div>
      <div className='px-2'>
        <h2 className={`${styles.heading3}`}>{subTitle}</h2>
      </div>
      <div className={`${styles.flexCenter} mt-[25px] md:mt-[50px]`}>
        {/* <BtnDownload /> */}
        <Iframe src='/2022-REAC-Ebook-FRAC-Guideline.pdf'
        display='block'
        // position='relative'
        width='1280px'
        height='640px'
        >
        </Iframe>
      </div>
    </section>
    //  cursed page,
  )
}

export default Section1newga