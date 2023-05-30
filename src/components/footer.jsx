import React from 'react'
import styles from '../style'
import { frac_logo } from '../Assets'

const Footer = () => {
  return (
    <section>
      <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className='flex-[-1] flex flex-col justify-start mr-10'>
          <img src={frac_logo} alt='frac logo' className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            This is where the footer will be appear        </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
