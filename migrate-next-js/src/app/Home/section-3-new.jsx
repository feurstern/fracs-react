import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import styles from '../style'
import { reasonsData } from '../constant'
const Section3new = () => {

  const rawsectionTitle = 'mengapa mengambil sertifikasi frac';
  const arr = rawsectionTitle.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i].charAt(0) === "f" ? arr[i] = arr[i].toUpperCase() : arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }


  let sectionTitle = arr.join(" ");


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [hovered, isHovered] = useState(false);
  useEffect(() => {
    {
      isInView ? controls.start('visible') : controls.start('hidden')
    }
  })

  const randomBgColour = [
    'bg-sky-600', 'bg-red-600', 'bg-green-600', 'bg-purple-600'
  ]
  const getRandomNumber = () => {
    return Math.floor(Math.random() * randomBgColour.length)
  }
  useEffect(() => {
    getRandomNumber();
  }, [getRandomNumber])

  return (
    <motion.section className='py-4'>
      <div className={`${styles.flexCenter}`}>
        <h1 className={`${styles.heading2}`}>{sectionTitle}</h1>
      </div>
      {
        reasonsData.map((data, index) => (
          <div key={data.id}>
            <ul className='pr-2 pl-2'>
              <li className={`${randomBgColour[getRandomNumber()]} text-white rounded-lg py-4 mb-0 mt-0`}>{data.content}</li>
            </ul>
          </div>
        ))
      }
    </motion.section>

  )
}

export default Section3new