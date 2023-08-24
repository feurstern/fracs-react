import React, { useRef, useState, useEffect } from 'react'
import styles from '../style'
import { bannerData } from '../constant/index'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
// just uncomment this script below for effect activation 
// import 'swiper/css/effect-fade'

const NewBanner = () => {
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        isInView ? controls.start('visible') : controls.start('hidden');
    }, isInView, controls)
    const [hovered, setHovered] = useState(false)

    return (
        <motion.section
            ref={ref}
            // variants={{
            //     hidden: { opacity: 0, y: 100 },
            //     visible: { opacity: 1, y: 0 }
            // // }}
            // variants={{
            //     hidden:{opacity:0, y:100},
            //     visible : {opacity:1, y:0}
            //     }}
            // initial="hidden"
            animate={controls}
            transition={{ duration: 1.75 }}
            className={`py-4`}>
            <Swiper
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                effect='coverflow'
                    coverflowEffect={{
                        rotate: 50,
                    stretch:0,
                    depth:100,
                    modifier:1,
                    slideShadows:true
                }}
                centeredSlides={true}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{ clickable: true }}
                scroll={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change!')}
            >
                {
                    bannerData.map((data, index) => (
                        <SwiperSlide
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className='cursor-pointer'>
                            <div>
                                <div className={``}>
                                    <h1 className={`${styles.heading2}`}>{data.title}</h1>
                                </div>
                                <img src={data.img} className='relative rounded-lg opacity-70' />
                                <p className={`${styles.heading3} absolute`}>{data.tagline}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </motion.section>
    )
}

export default NewBanner