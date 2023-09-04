import React from 'react'
import styles from '../style'
import { riskManagementList, riskManegementTitle } from '../constant';

const Section3cernew = () => {
  const rawTitle = 'kurikulum frac';
  const firstIndex = 0;
  const sliceIndex = 1;

  const titleToUpperCase = (title, index, s) => {
    let arr = title.split(' ');

    for (let i = 0; i < arr.length; i++) {
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
            {riskManegementTitle[0]}
          </p>
        </div>
        <div className={`mt-[45px] md:mt-[25px]`}>
          <p className={`${styles.paragraph}`}>{riskManegementTitle[1]}</p>
          {
            riskManagementList.map((data, index) => (
              <div key={index} className={` ${styles.flexBetween} mt[45px] md:mt-[25px] px-4 bg-gray-400 rounded-lg`}>
                <p className={`${styles.paragraph} m-4 px-4` }>
                  {data.content}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Section3cernew