import React, { useState } from 'react'
import styles, { layout } from '../style'
import Image from 'next/image'
import { business } from '../Assets'
import { motion } from 'framer-motion'

const Section2ga = () => {
    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    const [isLoad, setIsLoad] = useState(false);
    const [isInView, setIsInView] = useState(false);
    return (
        <motion.section
            // initial={false}
            // animate={isLoad && isInView ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            //     : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            // }
            // transition={{duration: 1, delay:1}}
            // viewport={{once:true}}
            // onViewportEnter={()=> setIsInView(true)}
            className={`pt-[50px]`}
        >
            <div className={`${styles.flexCenter} pt-[10px]`}>
                <button type='button' className='pl-[10px] pr-[10px]'>All Categories</button>
                <button type='button' className='pl-[10px] pr-[10px]'>Offline Training</button>
                <button type='button' className='pl-[10px] pr-[10px]'>Online Training</button>
            </div>
            <div className={`${styles.galleryImageContainer} cursor-pointer pt-[20px] pb-[20px]`}>
                <div className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </div>
                <div className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </div>
                <div className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </div>
                <div className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </div>
                <div className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </div>
                <div className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </div>
                <div className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </div>
                <div className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </div>
                <div className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </div>
            </div>
        </motion.section>
    )
}

export default Section2ga
