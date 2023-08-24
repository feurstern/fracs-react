'use client'
import React from 'react'
import styles from '../style'
import { Footer, Navbar } from '../components/components'
import Section1ga from './section-1-ga'
import { Section2ga } from './section-2-ga'
import Imageslidenew from './Image-slide-new'
import Page404 from './404'

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
          <Page404/>
          {/* <Section1ga /> */}
          {/* <Imageslide /> */}
          {/* <Imageslidenew/> */}
          {/* <Section2ga />image container */}
          {/* <Footer/> */}
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