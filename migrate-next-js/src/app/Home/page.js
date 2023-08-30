"use client";
import React from 'react'
import Section1 from './section-1'
import Section2 from './section-2'
import Section3 from './section-3'
import Section4  from './section-4'
import Section5 from './section-5'
// import Section6 from './section-6'
import Section7 from './section-7'
import Section51 from './section-5-1'
import Section1cer from './section-1-cer'
import Section2cer from './section-2-cer'
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
        {/* <Banner/> */}
        <Section1new/>
        <Section3new/>
        <div className=''>
          <Section4new/>
        </div>
        <Section51/>
        {/* <Section1cer/> */}
        {/* <Section2/> */}
        {/* <Section3/> */}
        {/* <Section4/> */}
        
        {/* <Section2cer/> */}
        <Section5/>
        {/* <Section6/> */}
        <Section7/>
        
        
    </section>

  )
}

export default Home