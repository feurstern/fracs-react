import React from "react";
import { Navbar, Footer } from '../components/components'

import styles from '../style'
import Section1cer from './section-1-cer'
import Section2cer from './section-2-cer'
import Section1cernew from "./Section-1-cer-new";
import Section2cernew from './section-2-cer-new'
import Section3cernew from './Section-3-cer-new'
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
          <Section1cernew/>
          <Section2cernew/>
          <Section3cernew/>
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