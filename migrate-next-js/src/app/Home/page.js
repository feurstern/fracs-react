"use client";
import React from 'react'
import Banner from './banner'
import Section1 from './section-1'
import Section2 from './section-2'
import Section3 from './section-3'
import Section4  from './section-4'
import Section5 from './section-5'
import Section6 from './section-6'
import Section7 from './section-7'
import Section51 from './section-5-1'
import Cta from '../certifications/cta'
import Section1cer from './section-1-cer'
import Section2cer from './section-2-cer'


// componentDidMount(){
 
// };

const Home = () => {
  return (
    <>
        {/* <Banner/> */}
        <Section1/>
        <Section1cer/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section51/>
        <Section2cer/>
        <Section5/>
        <Section7/>
    </>

  )
}

export default Home