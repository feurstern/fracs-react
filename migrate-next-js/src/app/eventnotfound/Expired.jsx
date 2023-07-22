import React from 'react'
import style from '../style'
import { warning } from '../Assets'
import Image from 'next/image'
import Link from 'next/link'

const Expired = () => {
    return (
        <section className={`text-center`}>
            <div className='pt-[50px]'>
                <h1 className={`${style.heading2}`}>
                    The Event is Expired!
                </h1>
            </div>
            <div className={`${style.flexCenter} pt-[20px]`}>
                <Image src={warning} height={420} width={420} />
            </div>
            <div className={`${style.flexCenter} pt-[50px] pr-[350px]`}>
                <div className={`flex justify-between content-around`}>
                    <div className='pl-[10px]'>
                        <button className='bg-red-700 text-white rounded-lg w-[150px] h-[40px]'>
                            <Link href='/'> Back to Home </Link>
                        </button>
                    </div>

                    <div className='pl-[200px]'>
                        <button className='bg-green-700 text-white rounded-lg w-[150px] pl-[] h-[40px]'>
                            <Link href='/register'>Register Another</Link>
                        </button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Expired