import React from 'react'
import styles from '../style'
import { Footer, Navbar } from '../components/components'
import Page404 from '../certifications/404'
import ErrorBoundary from '../certifications/error'

const Gallery = () => {
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
          <Page404/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Gallery