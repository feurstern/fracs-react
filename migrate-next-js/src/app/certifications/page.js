import React from 'react'
import ErrorBoundary from './error'
import { Navbar, Footer } from '../components/components'
import styles from '../style'
import Page404 from './404'
import Section1cer from './section-1-cer'
import Cta from './cta'
import Section2cer from './section-2-cer'


const page = () => {
  return (
    <div className='bg-red-700 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} sticky bg-red-700`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Page404/> */}
          <Section1cer />
          <Section2cer />
          {/* <Cta/> */}
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

export default page