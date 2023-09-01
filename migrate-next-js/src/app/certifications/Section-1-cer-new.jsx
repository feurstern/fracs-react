import React from 'react'
import styles from '../style'
import CollapseSc1 from './CollapaseSc1'

const Section1cernew = () => {
    const rawTitle = 'persyaratan sertifikasi frac';
    const arr = rawTitle.split(' ');
    const firstIndex = 0;
    const sliceIndex = 1;

    for(let i =0; i<arr.length; i++){
        arr[i].charAt(firstIndex) === 'f' ? arr[i]= arr[i].toUpperCase() : arr[i] = arr[i].charAt(firstIndex).toUpperCase() + arr[i].slice(sliceIndex);
    }

    const title = arr.join(' ');

  return (
     <section className={`px-4`}>
       <div>
          <h1 className={`${styles.heading2}`}>{title}</h1>
       </div>
       <div>
        <h2 className={`${styles.heading3}`}>Persyaratan untuk menjadi Kandidat FRAC untuk dapat mengikuti ujian Sertifikasi FRAC adalah:</h2>
       </div>
       <div className='px-8'>
        <CollapseSc1/>
       </div>
     </section>
  )
}

export default Section1cernew