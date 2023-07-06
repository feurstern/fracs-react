'use client'
import React, { useState, useEffect, useRef } from 'react'
import styles, { layout } from '../style'
import { scheme } from '../Assets'
import Image from 'next/image'
import { animate, motion, useAnimation, useInView } from 'framer-motion'

const Section3 = () => {
  const controls = useAnimation();
  const ref= useRef(null)
  const [hovered, isHovered] = useState(false);
  const isInView = useInView(ref, {once:true});
  useEffect(()=>{
    isInView?controls.start('visible') : controls.start('hidden')
    ,[isInView, controls]
  })


  return (
    <motion.section 
    ref={ref}
    variants={{
      hidden:{opacity:0, x:200},
      visible : {opacity:1, x:0}
    }}
    initial='hidden'
    animate={controls}
    transition={{duration:2}}
    className={` mt-[100px]`}>
      <div 
      onMouseEnter={()=> isHovered(true)}
      onMouseLeave={()=> isHovered(false)}
      className={`${styles.flexStart2}`}>
        <h1 className={`${styles.heading2} mb-[20px]`}>Curriculum Schemes</h1>
      </div>
      <div className={`${styles.flexCenter} mb-[30px] pb-[15px]`}>
        <Image src={scheme} alt='scheme' />
      </div>
      <h3 className={`${styles.flexStart2} font-poppins font-semibold xs:text-[25px] text-[20px] text-black xs:leading-[60px] mb-[25px]`}>
        Tertarik untuk menjadi profesional di bidang manajemen risiko keuangan dengan sertifikasi FRAC? Berikut adalah langkah-langkah dan persyaratan yang perlu Anda penuhi:</h3>
      <div id='table-scheme' className={`${styles.flexCenter} font-poppins text-[18px]`}>
        <table className='table-fixed border border-black'>
          <thead className='text-center border border-black bg-red-600 text-white'>
            <tr className='border border-black'>
              <th className='w-[50px] border border-black'>No</th>
              <th className='w-[200px] text-left pl-2 border border-black'>Persyaratan</th>
              <th className='w-[800px] border border-black'>Penjelasan</th>
            </tr>
          </thead>
          <tbody className='w-[20px] text-justify mt-[2px] mb-[5px]'>
            <tr className=''>
              <td className='text-center border border-black'>1.</td>
              <td className='border border-black pl-2'><b>Pendidikan</b></td>
              <td className='border border-black pl-[10px] pr-[10px]'>Minimal lulusan SMU. Jika Anda adalah seorang profesional dengan pengalaman kerja minimal 2
                tahun atau sedang menjalani pendidikan sarjana atau diploma, Anda juga memenuhi syarat.</td>
            </tr>
            <tr>
              <td className='text-center border border-black'>2.</td>
              <td className='border border-black pl-2'><b>Akun Profil</b>
              </td>
              <td className='border border-black pl-[10px] pr-[10px]'>Buat akun profil pada website kami dan lengkapi dokumen-dokumen seperti CV,
                foto profesional, KTP, dan sertifikat pelatihan dengan kurikulum FRAC.</td>
            </tr>
            <tr>
              <td className='text-center border border-black'>3.</td>
              <td className='border border-black pl-2'><b>Pelatihan Sertifikasi</b></td>
              <td className='border border-black pl-[10px] pr-[10px]'>Ikuti dan lulus pelatihan sertifikasi FRAC yang diselenggarakan oleh Training Partner IFMI.
                Ini akan memastikan bahwa Anda memiliki pengetahuan dan keterampilan yang dibutuhkan.</td>
            </tr>
            <tr>
              <td className='text-center border border-black'>4.</td>
              <td className='border border-black pl-2'><b>Komitmen Etis</b></td>
              <td className='border border-black pl-[10px] pr-[10px]'>Anda harus berkomitmen untuk menjaga kerahasiaan dan integritas proses, dokumentasi dan materi pelatihan.
                Selain itu, Anda juga harus berkomitmen untuk tidak terlibat dalam tindakan yang melanggar etika atau hukum.</td>
            </tr>
            <tr>
              <td className='text-center border border-black'>5.</td>
              <td className='border border-black pl-2'><b>Biaya Ujian</b></td>
              <td className='border border-black pl-[10px] pr-[10px]'>Lunasi biaya ujian sertifikasi FRAC sesuai dengan ketentuan yang telah ditetapkan oleh IFMI.</td>
            </tr>
            <tr>
              <td className='text-center border border-black'>6.</td>
              <td className='border border-black pl-2'><b>Kemampuan Dasar</b></td>
              <td className='border border-black pl-[10px] pr-[10px]'>Anda perlu mampu melihat dengan baik dan bisa menggunakan komputer secara mandiri untuk mengoperasikakan komputer,
                mengakses internet, dan menggunakan program office (tingkat dasar). </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.section>
  )
}

export default Section3