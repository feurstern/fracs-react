import React from 'react'
import styles, {layout} from '@/app/style'
import { scheme } from '@/app/Assets'
import Image from 'next/image'

const Section3 = () => {
  return (
    <section className={` mt-[100px]`}>
        <div className={`${styles.flexStart2}`}>
            <h1 className={`${styles.heading2} mb-[20px]`}>Curriculum Schemes</h1>
        </div>
        <div className={`${styles.flexCenter} mb-[30px] pb-[15px]`}>
          <Image src={scheme}  alt='scheme'/>
        </div>
        <h3 className={`${styles.flexStart2} font-poppins font-semibold xs:text-[25px] text-[20px] text-black xs:leading-[60px] mb-[25px]`}>
        The requirments for become the candidate FRAC certification as follows:</h3>
        <div id='table-scheme' className={`${styles.flexStart2} font-poppins text-[18px]`}>
         <table className='table-fixed'>
            <thead className='text-center'>
              <tr>
              <th className='w-[20px]'>No</th>
              <th className='w-[6000px]'>Description</th>
              </tr>
            </thead>
            <tbody className='w-[20px] text-justify mt-[2px] mb-[5px]'>
                <tr className=''>
                    <td>1.</td>
                    <td>The candidate is a male or female at least 21 years old.</td>
                </tr>
                 <tr>
                    <td>2.</td>
                    <td>The candidate must posses atleast Highschool graduate.</td>
                </tr>
                 <tr>
                    <td>3.</td>
                    <td>The candidate is having experience counted as two years as minimum or currently having postgraduate or undergraduate in any field.</td>
                </tr>
                 <tr>
                    <td>4.</td>
                    <td>The candidate must have an account that already submited all the required documents such as CV, photo, ID card which being legally approved by the local goverment.</td>
                </tr>
                 <tr>
                    <td>5.</td>
                    <td>The candidate is already taken the certification exam which being held by FRAC curicullum.</td>
                </tr>
                 <tr>
                    <td>6.</td>
                    <td>The candidate has attended and passed the FRAC training class organized by IFMI Training Partner. </td>
                </tr>
                 <tr>
                    <td>7.</td>
                    <td>The candidate is compulsory to make commitment toward the integrity, the private, the documents, and the material lesson of IFMI or other training IFMI's partner, included the candidate should not use the certification as the proofment of the certification of competence's FRAC.</td>
                </tr>
                 <tr>
                    <td>8.</td>
                    <td>The candidate is compulsory to make commitment toward the behavioural, cheating matter, crime matter that will be make any missconduct for IFMI and any stalkholder who might affliated with IFMI</td>
                </tr>
                 <tr>
                    <td>9.</td>
                    <td>The candidate must pay the exam fee. </td>
                </tr>
                 <tr>
                    <td>10.</td>
                    <td>The candidate is compulsory to have a good sight, not blindly, and the candidate is able to use computer.</td>
                </tr>
            </tbody>
         </table>
        </div>
    </section>
  )
}

export default Section3