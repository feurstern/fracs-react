'use client'
import React from 'react'
import styles from '../style'
import { Footer, Navbar } from '../components/components'
import Page404 from './404'
import Section1newga from './Section-1-new-ga'
import Section2ganew from './Section-2-new-ga'
import Main from './ThreeComponent/Main'

const Gallery = () => {

  return (
    <div className='bg-red-700 w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 bg-red-700`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-white border-red-600 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Section1newga/> 
         <Section2ganew/>
         {/* <Main/> */}
        </div>
      </div>

      <div className={`bg-blue-900 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Gallery

// Dear students, I would like to inform you about the postponement of of our upcoming class scheduled on Saturday from 10:00 to 10:35 (if you agree).
//  Unfortunately, I must make this adjustment due to I have to attend the online training session of Ministry Technology on Saturday start from 09:00 - 10:30 which stack with our class's schedule.

// Please choose these selection form whether you're agree or not, if we reschedule  our class to 10:35(WIB) Thank you
// 
//