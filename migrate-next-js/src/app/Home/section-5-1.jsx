import React from 'react'
import styles from '../style'
import Image from 'next/image'
import { kan } from '../Assets'

const Section51 = () => {
    return (
        <section className={` pt-[50px]`} >
            <div className={`${styles.flexCenter}`}>
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

        </section>
    )
}

export default Section51
