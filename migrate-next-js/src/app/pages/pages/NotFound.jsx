import React from 'react'
import styles, {layout} from '../style'

const NotFound = () => (
    <section className={`${layout.section} text-[24px] leading-[20px] text-black`}>
        <div className={`${styles.heading2} text-black`}>
         <h1 className='font-poppins font-semibold'>
            The page that look you're looking for is missing.
         </h1>
        </div>
    </section>
)



export default NotFound
