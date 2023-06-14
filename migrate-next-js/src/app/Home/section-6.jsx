import React from 'react'
import { quotes } from '@/app/Assets'
import styles, {layout} from '@/app/style'
import Image from 'next/image'

const Section6 = ({content,name,title, img}) =>(
    <div className={`${styles.flexCenter} flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[360px] md:mr-10 sm:mr-5 mr-0 my-5 feed-back-card hover:bg-red-500 hover:text-white`}>
        <Image src={quotes} alt="quotes svg" className='w-[42.6px] h-[27px] object-contain' />
        <p className='font-poppins font-normal text-[18px] leading-[32.4px] my-10'>
          {content}
        </p>
     <div className='flex flex-row'>
       <img src={img} alt='people' className='w-[48px] h-[48px] rounded-full border-[2.1px] border-black' />
       <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px]' >
            {name}
          </h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px]'>
           {title}
          </p>
       </div>
     </div>
    </div>
)

export default Section6