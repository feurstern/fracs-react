import React from 'react'
import styles, {layout} from '../style'
import Image from 'next/image'
import { business } from '../Assets'

const Section2ga = () => {
  return (
    <section className={`pt-[50px]`}>
     <div className={`${styles.flexCenter} pt-[10px]`}>
      <button type='button' className='pl-[10px] pr-[10px]'>All Categories</button>
      <button type='button' className='pl-[10px] pr-[10px]'>Offline Training</button>
      <button type='button' className='pl-[10px] pr-[10px]'>Online Training</button>
     </div>
        <div className={`${styles.galleryImageContainer} cursor-pointer pt-[20px]`}>
            <div className='hover:bg-red-700 relative'>
                <Image 
                className='h-auto max-w-full rounded-lg hover:opacity-50' 
                src={business}/>
                <p>This is the placeholder of the text image</p>
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
        </div>
    </section>
  )
}

export default Section2ga
