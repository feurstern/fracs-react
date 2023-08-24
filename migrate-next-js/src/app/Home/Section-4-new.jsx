import React from 'react'
import styles from '../style'

const Section4new = () => {
  const rawSectionTitle = 'siapa perlu mengambil sertifikat frac'
  /* nevermind about how persevere I am, to convert the first letter 
  to uppercase by using long script instead declare it properly on the variable heheheh
  */
  const arr = rawSectionTitle.split(" ");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    arr[i].charAt(0) === "f" ? arr[i] = arr[i].toUpperCase() : arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  };
  console.log(arr);
  const sectionTitle = arr.join(" ");

  const content = 'FRAC menggunakan metode yang berlaku di perusahaan sehingga sangat berguna bagi Anda yang berlatar keuangan, selain itu fungsi nonfinansial seperti operasional, pemasaran dan hukum akan menerima manfaat sertifikasi ini. Sertifikasi FRAC sangat bermanfaat bagi profesi dibawah ini:'

  return (
    <section className={`bg-sky-600 rounded-xl ${styles.flexCenter} py-6`}>
      {/* title */}
      <div className={`${styles.heading2}`}>
        {sectionTitle}
      <p className={`${styles.paragraph}`}>
        {content}
      </p>
      </div>
    </section>
  )
}

export default Section4new