import React from 'react'
import styles, {layout} from '../../style'

const Section4 = () => {
  return (
    <section className={`mt-[50px] mb-[20px]`}>
     <div className={`${styles.flexStart2}`}>
        <h1 className={`${styles.heading2} text-black`}>
            The FRAC Certification Fee
        </h1>
     </div>
     <div className={`${styles.flexStart2}`}>
        <h2 className={`font-poppins font-semibold xs: text-[25px] text-[20px] text-black xs:leading-[50px] mt-[20px]`}>
            IFMI has set the all of the fees about FRAC as:
        </h2>
     </div>

     <div className={`${styles.flexCenter} mt-[40px]`}>
        <table className={`border-2`}>
            <thead>
            <tr>
                <th className='w-[20px]'>No</th>
                <th className='w-[400px]'>Description</th>
                <th className='w-[200px]'>Cost</th>
                <th className='w-[350px]'>Miscellaneous</th>
            </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
     </div>
    </section>
  )
}

export default Section4