import React, { useEffect, useRef } from 'react'
import styles from '../style'
import { targetMarket } from '../constant'
import { useAnimation, useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import { duration } from 'moment'
const Section4new = () => {
  const rawSectionTitle = 'siapa perlu mengambil sertifikat frac'
  /* nevermind about how persevere I am, to convert the first letter 
  to uppercase by using long script instead declare it properly on the variable heheheh
  */
  const arr = rawSectionTitle.split(" ");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    arr[i].charAt(0) === "f" ? arr[i] = arr[i].toUpperCase() : arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  };
  console.log(arr);
  const sectionTitle = arr.join(" ");

  const content = 'FRAC menggunakan metode yang berlaku di perusahaan sehingga sangat berguna bagi Anda yang berlatar keuangan, selain itu fungsi nonfinansial seperti operasional, pemasaran dan hukum akan menerima manfaat sertifikasi ini. Sertifikasi FRAC sangat bermanfaat bagi profesi di bawah ini:'

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {once: true});

  useEffect(()=>{
     isInView ? controls.start('visible') : controls.start('hidden'); 
  },[controls, isInView])

  const avgStr = 17

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden : {opacity:0, x:100},
        visible : {opacity:1, x:0}
      }}
      initial='hidden'
      animate={controls}
      transition={
        {duration: 2.25}
      }
    
    className={` ${styles.flexCenter} mt-[50px] py-4 w-[500px xs:w-full ]`}>
      <div className={`mb-[80px]`}>
        <div className=''>
          <div className={`${styles.heading2} text-center pt-[50px] pb-[50px] mr-2 ml-2 text-white`}>
            {sectionTitle}
            <p className={` mr-6 ml-2  text-white`}>
              <span className={`${styles.paragraph} text-white`}>{content}</span>
            </p>
          </div>
        </div>
        <div className={`mt-4 ml-2 mr-2 grid md:grid-cols-3 gap-8`}>
          {
            targetMarket.map((data, index) => (
              <ul key={index} className='cursor-pointer bg-white rounded-lg px-2'>
                <li className={` text-l xs:text-[27px] flex gap-4 ${data.length > avgStr ? 'items-start' : 'items-end'}`}>
                  <svg class={`w-6 h-6 mr-2 ${data.length >avgStr ? 'mt-6' : 'mt-[2px]'} text-green-500 dark:text-green-400 flex-shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className={` text-black`}>{data}</span>
                </li>
              </ul>
            ))
          }
        </div>
      </div>
    </motion.section>
  )
}

export default Section4new