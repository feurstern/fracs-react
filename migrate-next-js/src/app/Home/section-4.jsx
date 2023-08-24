"use client";
import React from "react";
import styles from "../style";
import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Section4 = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hovered, isHovered] = useState(false);
  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  });
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1.75 }}
      className={`mt-[100px] mb-[20px]`}
    >
      <div
        onMouseEnter={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
        className={`${styles.flexStart2}`}
      >
        <h1 className={`${styles.heading2} text-black`}>
          The FRAC Certification Fee
        </h1>
      </div>
      <div className={`${styles.flexStart2}`}>
        <h2
          className={`font-poppins font-semibold text-black xs:leading-[50px] mt-[20px]`}
        >
          IFMI has set the all of the fees about FRAC as:
        </h2>
      </div>
      <div className={`${styles.flexStart2}`}>
        <p className={`${styles.paragraph}`}>
          Keputusan untuk menjadi FRAC adalah investasi yang berharga untuk masa
          depan karir Anda. Berikut adalah rincian biaya yang terkait dengan
          sertifikasi FRAC:
        </p>
      </div>

      <div className={`${styles.flexCenter} overflow-x-scroll font-poppins text-[18px]  sm:flex-col`}>
        <table className={` border-collapse border border-black text-[18px] table-fixed`}>
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="w-auto border border-black">No</th>
              <th className="w-auto border border-black">Keterangan</th>
              <th className="w-auto border border-black">Biaya</th>
              <th className="w-auto border border-black">Catatan</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="border border-black">
              <td className="border border-black">1</td>
              <td className="border border-black">Pelatihan dan Ujian FRAC</td>
              <td className="border border-black">
                Rp. 7.300.000(offline) dan Rp. 6.300.000(online) per kandidat
              </td>
              <td className="border border-black text-left pr-[10px] pl-[10px]">
                Anda akan mendapatkan akses ke pelatihan intensif dan ujian
                sertifikasi
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-black">2</td>
              <td className="border border-black">Ujian Ulang FRAC</td>
              <td className="border border-black">Rp. xxxx per kandidat</td>
              <td className="border border-black text-left pr-[10px] pl-[10px]">
                Jika Anda membutuhkan kesempatan kedua dalam ujian.
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-black">3</td>
              <td className="border border-black">
                Administrasi Resertifikasi
              </td>
              <td className="border border-black">Rp. xxxxx per kandidat</td>
              <td className="border border-black text-left pr-[10px] pl-[10px]">
                Untuk memastikan kompetensi Anda tetap terjaga, kami menyarankan
                resertifikasi setiap 2 tahun.
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-black">4</td>
              <td className="border border-black">Penundaan Ujian FRAC</td>
              <td className="border border-black">Rp. xxxx per kandidat</td>
              <td className="border border-black text-left pr-[10px] pl-[10px]">
                Jika Anda perlu menunda ujian.
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-black">5</td>
              <td className="border border-black">Banding Ujian FRAC</td>
              <td className="border border-black">Rp. xxxx per kandidat</td>
              <td className="border border-black text-left pr-[10px] pl-[10px]">
                Jika Anda ingin melalukan appeal atau banding atas hasil
                ujiannya.
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-black">6</td>
              <td className="border border-black">
                Reaktivitasi Sertifikasi FRAC
              </td>
              <td className="border border-black">Rp. xxxx per kandidat</td>
              <td className="border border-black text-left pr-[10px] pl-[10px]">
                Jika sertifikasi Anda perlu diaktifkan kembali.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

export default Section4;
