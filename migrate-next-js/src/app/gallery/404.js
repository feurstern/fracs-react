import React from 'react'
import styles from '../style'
import { stop } from '../Assets'
import Image from 'next/image'

const Page404 = () => {
  return (
    <div className={`text-center mt-[50px]`}>
     <div className={`${styles.flexCenter}`}>
        <h1 className={`${styles.heading2}`}>
            The website is currently under constructions
        </h1>
     </div>

     <div className={`${styles.flexCenter} mx-auto `}>
      <Image src={stop}/>
     </div>

    </div>
  )
}

export default Page404
