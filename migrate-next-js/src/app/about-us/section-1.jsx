'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../style'
import { motion, useAnimation, useInView } from 'framer-motion'
import { aboutIfmi } from '../constant'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectCube,
    Autoplay,
} from "swiper/modules";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay";


const Section1aboutus = () => {
    const ref = useRef(null);
    const controls = useAnimation();
    const [hovered, isHovered] = useState('false');
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        isInView ? controls.start('visible') : controls.start('hidden')
    }, [isInView, controls])

    const rawTitle = 'tentang ifmi';
    let arr = rawTitle.split(' ');
    const firstIndex = 0;
    const sliceIndex = 1;


    for (let i = 0; i < arr.length; i++) {
        arr[i].charAt(firstIndex) === 'i' ? arr[i] = arr[i].toUpperCase() : arr[i] = arr[i].charAt(firstIndex).toUpperCase() + arr[i].slice(sliceIndex);
    }

    const title = arr.join(' ');


    console.log(title)
    return (
        <motion.section
            ref={ref}
            variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 }
            }}
            animate={controls}
            initial='hidden'
            transition={{
                duration: 2.25
            }}

            className={`my-4`}>
            <div className={`${styles.flexCenter}`}>
                <h1 className={`${styles.heading2}`}>
                    {title}
                </h1>
            </div>
            <div className={`py-4 border-8 border-dashed border-black  rounded-lg mt-4 flex-row w-full`}>
                <Swiper
                    modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                        EffectCube,
                    ]}
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    centeredSlides={true}
                    effect='cube'
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false
                    }}
                >
                    {
                        aboutIfmi.map((data, index) => (

                            <SwiperSlide>
                            <div className='relative'>
                                <p className={`${styles.paragraph} mx-4 my-4 absolute`}>{data.text}</p>
                            </div>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </div>
        </motion.section>

    )
}

export default Section1aboutus