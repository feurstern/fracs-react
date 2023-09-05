'use client'
import React from 'react'
import styles from '../style'
import { Footer, Navbar } from '../components/components'
import Page404 from './404'
import Section1newga from './Section-1-new-ga'
import Section2ganew from './Section-2-new-ga'

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