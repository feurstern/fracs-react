import React from 'react'
import Section1reg from './section-1-reg'
import Section2reg from './section-2-reg'
import { Navbar, Footer } from '../components/components'
import styles from '../style'


const Register = () => {
  return (
    <div className='bg-red-700 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} sticky bg-red-700`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-white border-red-600 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>

      <div className={`bg-white  ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Page404/> */}
          <Section1reg />
          <Section2reg />
          {/* <Card/> */}z  
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

export default Register
