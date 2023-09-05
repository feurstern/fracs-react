'use client'

import React, { useEffect, useRef } from 'react'
import styles from '../style'
import CollapseSc1 from './CollapaseSc1'
import { motion, useAnimation, useInView } from 'framer-motion'

const Section1cernew = () => {
  const rawTitle = 'persyaratan sertifikasi frac';
  const subTitleRaw = 'berikut adalah persyaratan sertifikasi frac:'
  const firstIndex = 0;
  const sliceIndex = 1;
  

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref,{once:true});
  useEffect(()=>{
    isInView ? controls.start('visible') : controls.start('hidden');
  },[isInView, controls])



  const titleUpperCase = (index, s, title) => {

    let arr = title.split(' ');

    for (let i = 0; i < arr.length; i++) {
      arr[i].charAt(index) === 'f' ? arr[i] = arr[i].toUpperCase() : arr[i] = arr[i].charAt(index).toUpperCase() + arr[i].slice(s);
    }
    return arr.join(' ');

  }


  const title = titleUpperCase(firstIndex, sliceIndex, rawTitle);
  const subTitle = titleUpperCase(firstIndex, sliceIndex, subTitleRaw);
  return (
    <motion.section 
    ref={ref}
    variants={{
      hidden: {opacity:0, x:100},
      visible: {opacity:1, x:0}
    }}
    initial='hidden'
    animate={controls}
    transition={{duration: 1.75}}
    className={`px-4 mt-[25px] md:mt-[50px]`}>
      <div>
        <h1 className={`${styles.heading2}`}>{title}</h1>
      </div>
      <div>
        <h2 className={`${styles.heading3}`}>{subTitle}</h2>
      </div>
      <div className='px-8 mt-[35px] md:mt-[50px]'>
        <CollapseSc1 />
      </div>
    </motion.section>
  )
}

export default Section1cernew