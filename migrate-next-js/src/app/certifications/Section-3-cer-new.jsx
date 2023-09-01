import React from 'react'
import styles from '../style'
import { riskManagementList, riskManegementTitle } from '../constant';

const Section3cernew = () => {
    const rawTitle = 'kurikulum frac';
    const firstIndex = 0;
    const sliceIndex =1;

    const titleToUpperCase=(title,index, s)=>{
        let arr = title.split(' ');

        for(let i =0; i< arr.length; i++){
            arr[i].charAt(index) === 'f' ? arr[i] = arr[i].toUpperCase() : arr[i] = arr[i].charAt(index).toUpperCase() + arr[i].slice(s);
        }

        return arr.join(' ');
    }

    const title = titleToUpperCase(rawTitle, firstIndex, sliceIndex);
  return (
    <section className='mt-[75px] px-4'>
     <div className='px-2'>
        <h1 className={`${styles.heading2}`}>
        {title}
        </h1>
        <div className={`${styles.flexCenter}`}>
           <p className={`${styles.paragraph}`}>
            {riskManegementTitle}
           </p>
        </div>
     </div>
    </section>
  )
}

export default Section3cernew