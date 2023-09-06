"use client";
import React from 'react'
import Section5 from './section-5'
import Section7 from './section-7'
import Section51 from './section-5-1'
import NewBanner from './NewBanner-home'
import Section3new from './section-3-new'
import Section1new from './section-1-new'
import Section4new from './Section-4-new'
// componentDidMount(){

///bg-gradient-to-tr from-black via-cyan-300 to-blue-500 w-full
 
// };

const Home = () => {
  return (
    <section>
        <Section1new/>
        <Section3new/>
        <div className=''>
          <Section4new/>
        </div>
        <Section51/>
        <Section5/>
        <Section7/>
    </section>

  )
}

export default Home