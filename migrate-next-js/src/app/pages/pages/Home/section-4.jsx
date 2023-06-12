import React from 'react'
import styles from '@/app/style'

const Section4 = () => {
  return (
    <section className={`mt-[100px] mb-[20px]`}>
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
        <table className={`border-collapse border border-black text-[18px]`}>
            <thead>
            <tr>
                <th className='w-[50px] border border-black'>No</th>
                <th className='w-[400px] border border-black'>Description</th>
                <th className='w-[200px] border border-black'>Cost</th>
                <th className='w-[350px] border border-black'>Miscellaneous</th>
            </tr>
            </thead>
            <tbody className='text-center'>
                <tr className='border border-black'>
                    <td className='border border-black'>1</td>
                    <td className='border border-black'>The Training and Exam Fee for FRAC</td>
                    <td className='border border-black'>IDR 3.400.000/person</td>
                    <td className='border border-black'>The FRAC Candidate</td>
                </tr>
                <tr className='border border-black'>
                    <td className='border border-black'>2</td>
                    <td className='border border-black'>Re-take Exam</td>
                    <td className='border border-black'>IDR 250.000/person</td>
                    <td className='border border-black'>Max 3 times within 2 years</td>
                </tr>
                <tr className='border border-black'>
                    <td className='border border-black'>3</td>
                    <td className='border border-black'>The Recertification administration fee</td>
                    <td className='border border-black'>IDR 1000.000/person</td>
                    <td className='border border-black'>Every 2 years</td>
                </tr>
                <tr className='border border-black'>
                    <td className='border border-black'>4</td>
                    <td className='border border-black'>The postpone exam fee</td>
                    <td className='border border-black'>IDR 250.000/person</td>
                    <td className='border border-black'>1 time for each exam</td>
                </tr>
                <tr className='border border-black'>
                    <td className='border border-black'>5</td>
                    <td className='border border-black'>The appeal FRAC exam fee</td>
                    <td className='border border-black'>IDR  250.000/person</td>
                    <td className='border border-black'>1 time for each exam</td>
                </tr>
                <tr className='border border-black'>
                    <td className='border border-black'>6</td>
                    <td className='border border-black'>The reactivation exam fee</td>
                    <td className='border border-black'>IDR 250.000/person</td>
                    <td className='border border-black'>1 time for each reactivation</td>
                </tr>
            </tbody>
        </table>
     </div>
    </section>
  )
}

export default Section4