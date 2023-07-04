import React from 'react'
import styles from '../../style'
import { arrow_up } from '../../Assets/index'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient`}>
      <div className={`${styles.flexCenter} flex-col bg-red-600 w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
             Get
          </p>
          <img src={arrow_up} alt="arrow up" className='w-[23px] h-[23.4px] object-contain' />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
