import Head from "next/head";
import { favico } from "@/app/Assets";
import React from 'react'

const Page = (props) => {
  return (
    <>
        <Head>
            <link rel="favicon icon" href={favico} />
        </Head>
    </>
  )
}

export default Page