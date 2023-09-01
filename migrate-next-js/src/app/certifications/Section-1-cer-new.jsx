import React from 'react'
import styles from '../style'
import CollapseSc1 from './CollapaseSc1'

const Section1cernew = () => {
    const rawTitle = 'persyaratan sertifikasi frac';
    const subTitleRaw= 'berikut adalah persyaratan sertifikasi frac:'
    const firstIndex = 0;
    const sliceIndex = 1;


    const titleUpperCase=( index, s, title)=>{

      let arr= title.split(' ');
      
      for(let i =0; i<arr.length; i++){
          arr[i].charAt(index) === 'f' ? arr[i]= arr[i].toUpperCase() : arr[i] = arr[i].charAt(index).toUpperCase() + arr[i].slice(s);
      }
      return arr.join(' ');
      
    }

    const title = titleUpperCase(firstIndex, sliceIndex, rawTitle);
    const subTitle = titleUpperCase(firstIndex,sliceIndex, subTitleRaw);
  return (
     <section className={`px-4`}>
       <div>
          <h1 className={`${styles.heading2}`}>{title}</h1>
       </div>
       <div>
        <h2 className={`${styles.heading3}`}>{subTitle}</h2>
       </div>
       <div className='px-8'>
        <CollapseSc1/>
       </div>
     </section>
  )
}

export default Section1cernew