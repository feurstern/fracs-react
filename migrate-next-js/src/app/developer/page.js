"use client"
import React, { useEffect, useState } from 'react'
import { navbar, footer } from '../components/components';
import styles from '../style';

const page = () => {

    const isDev = process.env.NODE_ENV == 'development';

    // const [data, setData] = useState('');

    // useEffect(() => {

    // }, ['']);

    if (isDev == 'development') {
        console.log('Currently in dev mode!');
    }
    else {
        console.log('NOt in dev mode!')
    }
    // console.log('isDEV', isDev)
    if (isDev) {
        return (
            <section className={`${styles.flexCenter}`}>
                <div>
                    <h1 className={`${styles.heading2}`}>Welcome to Developer Mode</h1>
                </div>
            </section>
        )
    }
    else {
        return (
            <section className={`${styles.flexStart} mt-2`}>
                <div className={`${styles.flexBetween} mt-2`}>
                    <h1 className={`${styles.heading2}`}>Welcome to Developer Page</h1>
                </div>
            </section>
        )
    }
}

export default page