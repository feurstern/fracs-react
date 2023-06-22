'use client'
import React from 'react'
import styles from '../style'
import { Footer, Navbar } from '../components/components'
import Page404 from '../certifications/404'
import ErrorBoundary from '../certifications/error'
import { useState } from 'react'
import Section1ga from './section-1-ga'
import Section2ga from './section-2-ga'
import Imageslide from './Image-slide'

const Gallery = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  return (
    <div className='bg-red-700 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar/>  
        </div>
      </div>

      <div className={`bg-white border-red-600 ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
         </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Page404/> */}
          <Section1ga/>{/*title of the page*/}
          <Imageslide/>
          <Section2ga/>{/* image container */}
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Gallery