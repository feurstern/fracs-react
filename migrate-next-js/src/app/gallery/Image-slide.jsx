import React from 'react'
import styles from '../style'
import Image from 'next/image'
import { business } from '../Assets'

const Imageslide = () => {
  return (
    <section className='relative data-carousel="slide"'>
        <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
            <div className='hidden duration-700 ease-in-out data-carousel-item'>
                <Image src={business} className='absolute block max-w-full h-auto -translate-x-1/2 translate-y-1/2 top-1/2 left-1/2'/>
            </div>
        </div>
    </section>
  )
  
}

export default Imageslide