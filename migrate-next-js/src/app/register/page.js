import React from 'react'
import Section1reg from './section-1-reg'
import Section2reg from './section-2-reg'
import { Navbar, Footer } from '../components/components'
import styles from '../style'
import Page404 from './404'
import Card from './Card'

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
         {/* <Page404/> */}
        <Section1reg/>
        <Section2reg/>
        {/* <Card/> */}
        <Footer/>
       </div>
     </div>
    </div>
  )
}

export default Register
