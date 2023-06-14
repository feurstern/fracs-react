import React from 'react'
import Section1reg from './section-1-reg'
import { Navbar, Footer } from '../components/components'
import styles from '../style'

const Register = () => {
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

     <div className={`bg-white  ${styles.paddingX} ${styles.flexStart}`}>
       <div className={`${styles.boxWidth}`}>
        <Section1reg/>

        <Footer/>
       </div>
     </div>
    </div>
  )
}

export default Register
