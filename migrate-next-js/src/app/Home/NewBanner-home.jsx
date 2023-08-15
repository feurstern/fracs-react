import React,{useRef, useState, useEffect} from 'react'
import styles from '../style'
import { bannerData } from '../constant/index'
import { motion, useInView,useAnimation } from 'framer-motion'
const NewBanner = () => {

    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, {once:true});
    

    return (
        <motion.section className={``}>
            {
                bannerData.map((data, index) => (
                    <div>
                     {/* this is for the header image */}
                        <div className={`${styles.flexBetween} mt-[20px]`}>
                            <h1 className={`${styles.heading2}`}>
                                {data.title}
                            </h1>
                        </div>
                            <p className={`${styles.paragraph}`}>
                                {data.tagline}
                            </p>
                            <img src={data.img} />
                    </div>
                ))
            }

        </motion.section>
    )
}

export default NewBanner