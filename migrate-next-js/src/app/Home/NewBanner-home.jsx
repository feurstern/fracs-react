import React from 'react'
import styles from '../style'
import bannerData  from '../constant/index'

const NewBanner = () => {
    return (
        <section className={`${styles.flex}`}>
            {
                bannerData.map
            }
        </section>
    )
}

export default NewBanner