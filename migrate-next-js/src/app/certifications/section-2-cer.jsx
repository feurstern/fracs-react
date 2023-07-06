'use client'
import React from 'react'
import styles from '../style'
import Image from 'next/image'
import { office1, office2 } from '../Assets'

const Section2cer = () => {
    return (
        <section classNam="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-black sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">Tingkatkan Karir Anda dengan Pelatihan FRAC</h2>
                    <p className={`${styles.paragraph} mb-4`}>Tingkatkan pengetahuan Anda dalam risiko keuangan perusahaan dengan Pelatihan FRAC kami.
                        Pelatihan FRAC adalah prasyarat bagi Anda yang berencana mengambil ujian sertifikasi FRAC. </p>
                    <p className={`${styles.paragraph} mb-4`}>
                        IFMI bermitra dengan institusi penyedia pelatihan terkemuka yang mengadopsi kurikulum FRAC sebagai standar pelatihan mereka. 
                        Hasil pelatihan atau sertifikat dari penyedia pelatihan bukan merupakan garansi kelulusan ujian kompetensi dan tidak mempengaruhi hasil ujian sertifikasi FRAC.
                        Berikut daftar Training Provider untuk pelatihan FRAC:
                    </p>
                    <p className={`${styles.paragraph}`}><b>PT Rajawali Konsulindo (RJ Consulting)</b></p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img
                        className="w-full rounded-lg"
                        src="https://e1.pxfuel.com/desktop-wallpaper/965/980/desktop-wallpaper-cappuccino-in-white-ceramic-cup-with-saucer-beside-gold-iphone-6s-and-laptop-table-thumbnail.jpg"
                        alt="office content 1"
                    />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://e0.pxfuel.com/wallpapers/6/594/desktop-wallpaper-studygram.jpg"
                        alt="office content 2" />
                </div>
            </div>
        </section>
    )
}

export default Section2cer
