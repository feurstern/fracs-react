// import Head from "next/head";
import { favico } from "@/app/Assets";
import React from 'react'
import { Head } from "next/document";

const Page = (props) => {
  const programmer = "梨央"
  return (
    <>
      <Head>
        <meta name='description' content="frac certifications" />
        <meta name="author" content={programmer}/>
        <link rel="favicon icon" href={favico} />
      </Head>
    </>
  )
}

export default Page