import React, { useEffect, useRef, useState } from 'react'
import styles, { layout } from '../style'
import Image from 'next/image'
import { business } from '../Assets'
import { motion, useAnimation, useInView } from 'framer-motion'

const Section2ga = () => {
    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { once: true });
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        isInView ? controls.start('visible') : controls.start('hidden')
    }, [isInView, controls])

    return (
        <motion.section
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate={controls}
            transition={{ duration: 2.25 }}
            className={`pt-[50px]`}
        >
            <div
                onMouseEnter={() => setIsLoad(true)}
                onMouseLeave={() => setIsLoad(false)}
                className={`${styles.flexCenter} pt-[10px]`}>
                <button type='button' className='pl-[10px] pr-[10px]'>All Categories</button>
                <button type='button' className='pl-[10px] pr-[10px]'>Offline Training</button>
                <button type='button' className='pl-[10px] pr-[10px]'>Online Training</button>
            </div>
            <div className={`${styles.galleryImageContainer} cursor-pointer pt-[20px] pb-[20px]`}>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </motion.div>
                <motion.div 
                whileHover={{scale:1.2}}
                whileTap={{scale:0.8}}
                className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </motion.div>
                <motion.div 
                whileHover={{scale:1.2}}
                whileTap={{scale:0.8}}
                className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </motion.div>
                <motion.div 
                whileHover={{scale:1.2}}
                whileTap={{scale : 0.8}}
                className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </motion.div>
                <motion.div 
                whileHover={{scale:1.2}}
                className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </motion.div>
                <motion.div 
                whileHover={{scale:1.2}}
                whileTap={{scale:0.8}}
                className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </motion.div>
                <motion.div 
                whileHover={{scale:1.2}}
                whileTap={{scale:0.8}}
                className='hover:bg-red-700'>
                    <img
                        className='h-auto max-w-full rounded-lg hover:opacity-50'
                        src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Section2ga
