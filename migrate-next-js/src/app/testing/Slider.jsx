'use client'
import React from 'react';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import SwiperCore, { Autoplay, Navigation } from 'swiper'; // Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { menu, frac_logo, scheme } from '../Assets';



SwiperCore.use([Autoplay, Navigation]);

function Slider() {
  return (
    <div className="App">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        navigation={true} 
      >
        <SwiperSlide>
          <img src={menu} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={frac_logo} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={scheme} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
