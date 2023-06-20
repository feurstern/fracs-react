import React from 'react'
import styles, {layout} from '../style'
import Image from 'next/image'
import { business } from '../Assets'

const Section2ga = () => {
  return (
    <section className={`pt-[50px]`}>
        <div className={`${styles.galleryImageContainer} cursor-pointer`}>
            <div className='hover:bg-red-700'>
                <Image 
                className='h-auto max-w-full rounded-lg hover:opacity-50' 
                src={business}/>
            </div>
            <div className='hover:bg-red-700'>
                <Image 
                className='h-auto max-w-full rounded-lg hover:opacity-50' 
                src={business}/>
            </div>
            <div className='hover:bg-red-700'>
                <Image 
                className='h-auto max-w-full rounded-lg hover:opacity-50' 
                src={business}/>
            </div>
            <div className='hover:bg-red-700'>
                <Image
                className='h-auto max-w-full rounded-lg hover:opacity-50'
                src={business}/>
            </div>
            <div className='hover:bg-red-700'>
                <Image 
                 className='h-auto max-w-full rounded-lg hover:opacity-50'
                 src={business}/>
            </div>
            <div className='hover:bg-red-700'>
                <Image 
                className='h-auto max-w-full rounded-lg hover:opacity-50'
                src={business}/>
            </div>
            <div className='hover: bg-red-700'>
             <Image 
             className='h-auto max-w-full rounded-lg'
             src={business}/>
            </div>
        </div>
    </section>
  )
}

export default Section2ga
