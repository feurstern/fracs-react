import React from 'react'
import styles, { layout } from '../../style'
import { trainingOutLine } from '../../constant'


const featureTraining =({icon,title,content,img, index})=>{
  <div className={`flex flex-row p-6 rounded-[20px]${index !== trainingOutLine.length -1 ?"mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
       <img src={``} alt='icon-star'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-black text-[18px] leading-[23px]'>
         {title}
      </h4>
      <p className='font-poppis font-normal text-black text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
};


const Section2 = () => {
  return (
     <section className={layout.section}>
       <div className={layout.sectionInfo}>
         <h2 className={styles.heading2}>
            FRAC Curriculum
         </h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         </p>
         <button styles={`mt-10`}/>
       </div>

       <div className={`${layout.sectionImg}flex-col`}>
       {trainingOutLine.map((feature,index)=>(
        <featureTraining key={feature.id} {...feature} index={index}/>
       ))}
       </div>
     </section>
  )
}

export default Section2
