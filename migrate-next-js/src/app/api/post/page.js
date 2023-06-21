"use server"
import React from 'react'
import handler from './testDB'
const page = () => {
    handler();
  return (
    <div>
    {handler}</div>
  )
}

export default page