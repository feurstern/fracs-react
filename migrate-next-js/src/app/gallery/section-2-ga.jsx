'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles, { layout } from '../style'
import Image from 'next/image'
import { business } from '../Assets'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { Modal } from './modal/Modal'
import { Reveal } from './modal/Reveal'

export const Section2ga = () => {
    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { once: true });

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    useEffect(() => {
        isInView ? controls.start('visible') : controls.start('hidden')
        !isInView ? controls.start('hidden') : controls.start('visible')
    }, [isInView, controls])


    return (
        <>
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
                    // onMouseEnter={() => setIsLoad(true)}
                    // onMouseLeave={() => setIsLoad(false)}
                    className={`${styles.flexCenter} pt-[10px]`}>
                    <button type='button' className='pl-[10px] pr-[10px]'>All Categories</button>
                    <button type='button' className='pl-[10px] pr-[10px]'>Offline Training</button>
                    <button type='button' className='pl-[10px] pr-[10px]'>Online Training</button>
                </div>
                {/* <Reveal>
                </Reveal> */}
                    <div className={`${styles.galleryImageContainer} cursor-pointer pt-[20px] pb-[20px]`}>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setModalOpen(true)}
                            className='hover:bg-red-700'>
                            <img
                                className='h-auto max-w-full rounded-lg hover:opacity-50'
                                src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setModalOpen(true)}
                            className='hover:bg-red-700'>
                            <img
                                className='h-auto max-w-full rounded-lg hover:opacity-50'
                                src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClicK={() => setModalOpen(true)}
                            className='hover:bg-red-700'>
                            <img
                                className='h-auto max-w-full rounded-lg hover:opacity-50'
                                src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setModalOpen(false)}
                            className='hover:bg-red-700'>
                            <img
                                className='h-auto max-w-full rounded-lg hover:opacity-50'
                                src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClicK={() => setModalOpen(false)}
                            className='hover:bg-red-700'>
                            <img
                                className='h-auto max-w-full rounded-lg hover:opacity-50'
                                src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setModalOpen(false)}
                            className='hover:bg-red-700'>
                            <img
                                className='h-auto max-w-full rounded-lg hover:opacity-50'
                                src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setModalOpen(false)}
                            className='hover:bg-red-700'>
                            <img
                                className='h-auto max-w-full rounded-lg hover:opacity-50'
                                src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setModalOpen(false)}
                            className='hover:bg-red-700'>
                            <img
                                className='h-auto max-w-full rounded-lg hover:opacity-50'
                                src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setModalOpen(false)}
                            className='hover:bg-red-700'>
                            <img
                                className='h-auto max-w-full rounded-lg hover:opacity-50'
                                src="https://rjcons.com/wp-content/uploads/photo-gallery/2%20(1).jpg" />
                        </motion.div>
                    </div>
            </motion.section>
            <Modal
                isOpen={modalOpen}
                closeModal={handleCloseModal}
                title= 'Example image'
                imageSrc='https://rjcons.com/wp-content/uploads/photo-gallery/34.jpg'
                description="This is the hardcode of the modal image"
            />
        </>
    )
}

