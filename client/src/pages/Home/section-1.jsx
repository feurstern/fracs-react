import React from 'react'
import styles from '../../style'
import GetStarted from '../getStarted'

const Section1 = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-red-gradient rounderd-[10px] mb-2'>
            <img src='' alt="test" />
            <p className={`${styles.paragraph} ml-2`}>
               <span className='text-black'>Register</span>
               <span className='text-black'>here ....</span>
            </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]'>
              About IFMI<br className='sm:block hidden'/>{" "} 
              <span className='font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full'> International Financial Modeling Institute </span>
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>
        <h1 className=' font-poppins font-semibold tex-xlg text-gradient'>
           Vision&Mission 
        </h1>
      </div>
    </section>
  )
}

export default Section1