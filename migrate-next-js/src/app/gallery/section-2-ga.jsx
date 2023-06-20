import React from 'react'
import styles, {layout} from '../style'
import Image from 'next/image'

const Section2ga = () => {
  return (
    <section className={`pt-[50px]`}>
        <div className={`${styles.galleryImageContainer}`}>
            <div>
                <Image 
                className='h-auto max-w-full rounded-lg' 
                src={`https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/23084516/bisnis-810x550.jpg`} 
                width={100} 
                height={100} />
            </div>
        </div>
    </section>
  )
}

export default Section2ga
