'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '../style'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay, Scrollbar } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { certificationProses } from '../constant'


const Section2cernew = () => {
  const rawTitle = 'alur proses sertifikasi frac'
  const rawSubTitle = 'berikut adalah skema sertifikasi frac secara ringkas:';
  const firstIndex = 0;
  const sliceIndex = 1;

  const titleToUpperCase = (title, index, s) => {
    let arr = title.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i].charAt(index) === 'f' ? arr[i] = arr[i].toUpperCase() : arr[i] = arr[i].charAt(index).toUpperCase() + arr[i].slice(s);
    };
    return arr.join(' ');
  }

  const title = titleToUpperCase(rawTitle, firstIndex, sliceIndex);
  const subTitle = titleToUpperCase(rawSubTitle, firstIndex, sliceIndex);
  return (
    <section className='mt-[50px]'>
      <div className={`px-2`}>
        <h1 className={`${styles.heading2}`}>{title}</h1>
      </div>
      <div>
        <img src='https://img.freepik.com/free-vector/hand-drawn-flat-design-business-communication-concept_52683-77369.jpg?w=996&t=st=1693553162~exp=1693553762~hmac=83cd4c2ce7b269963c55bee025a6537eaceaf1d62a0d485b44a818577ab5df8e' />
        <h2 className={`${styles.heading3}`}>{subTitle}</h2>
      </div>
      <Swiper
        modules={[ Navigation, Pagination, Scrollbar, A11y, Autoplay,]}
        spaceBetween={5}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
      >
        {
          certificationProses.map((data, index) => (
            <div key={data.id} id={index}>
              <SwiperSlide>
                <p className={`${styles.paragraph}`}>
                  {data.content}
                </p>
              </SwiperSlide>

            </div>
          ))
        }

      </Swiper>

    </section>
  )
}

export default Section2cernew