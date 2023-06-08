import React from 'react'
import Section1 from './Home/section-1'
import Section2 from './Home/section-2'
import Section3 from './Home/section-3'
import Section4 from './Home/section-4'

const Home = () => {
  return (
    <div>
        <h1>Home page</h1>
        <Section1/> {/* header about IFMI*/}
        <Section2/> {/* About curriculum */}
        <Section3/> {/* curriculum scheme */}
        <Section4/> {/* certififcation fee */}
    </div>
  )
}

export default Home
