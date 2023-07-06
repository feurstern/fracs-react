'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../style'
import Image from 'next/image'
import { kan } from '../Assets'
import { motion, useAnimation, useInView } from 'framer-motion'

const Section51 = () => {
    const ref = useRef(null);
    const controls = useAnimation();
    const [hovered, isHovered] = useState(false);
    const [clicked, isClicked] = useState(false);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        isInView ? controls.start('visible') : controls.start('hidden')
            , [isInView, controls]
    })
    return (
        <motion.section
            ref={ref}
            variants={{
                hidden: { opacity: 0,  x:100,  rotate: [0, 0, 0, 0, 0] },
                visible: { opacity: 1, x:0, rotate: [0, 0, 270, 270, 0] }
            }}
            initial='hidden'
            animate={controls}
            transition={{duration:1.75}}
            className={` pt-[50px]`} >
            <div 
            onMouseEnter={()=>isHovered(true)}
            onMouseLeave={()=>isHovered(false)}
            className={`${styles.flexCenter}`}>
                <h1 className={`${styles.heading2}`}>
                    Pengakuan dan Kredibilitas Tinggi
                </h1>
            </div>
            <div className={`${styles.flexCenter} pt-[20px] pb-[25px]`}>
                <Image src={kan}
                    className='border rounded-lg cursor cursor-pointer'
                    href='http://kan.or.id/index.php/documents/terakreditasi/doc17021/sni-iso-iec-17024/lembaga-sertifikasi-person' />
            </div>
            <div className={`bg-red-600 border rounded-lg p-[15px]`}>
                <p className={`${styles.paragraph} text-white`}>
                    Kami di IFMI percaya bahwa kualitas adalah kunci sukses. Oleh karena itu, kami telah menciptakan program Sertifikasi FRAC yang komprehensif dengan standar global dan kurikulum yang kuat. Keunggulan ini telah menghasilkan pengakuan penting: pada tahun 2022, program Sertifikasi FRAC kami mendapatkan akreditasi prestisius dari KAN (Komite Akreditasi Nasional) Indonesia. Kepercayaan ini menegaskan komitmen kami terhadap standar tertinggi
                    dan membantu Anda memperkuat kredibilitas profesional Anda di pasar global.
                </p>

            </div>

        </motion.section>
    )
}

export default Section51
