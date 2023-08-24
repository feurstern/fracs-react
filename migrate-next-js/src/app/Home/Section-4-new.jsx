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
   arr[i].charAt(0) === "f" ? arr[i] =arr[i].toUpperCase() :arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  };
  console.log(arr);
  const sectionTitle = arr.join(" ");

  return (
    <section className={`${styles.flexCenter}`}>
      {/* title */}
      <div className={`${styles.heading2}`}>
       {sectionTitle}
      </div>
    </section>
  )
}

export default Section4new