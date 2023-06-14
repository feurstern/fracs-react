import React from 'react'
import Image from 'next/image'
import { banner } from '../Assets'

const Banner = () => {
  return (
    <div className=''>
        <div id='banner'>
          <Image src={banner} className='w-[100%] h-[auto]' alt='image banner'>
          </Image>
        </div>
    </div>
  )
}

export default Banner