<<<<<<< HEAD
"use server"
import React from 'react'
import handler from './testDB'
const page = () => {
    handler();
  return (
    <div>
    {handler}</div>
  )
=======
import excuteQuery  from "../../lib/db";

export default async function handler() {
  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM api_key where name like "%fra%" ',
      values: [],
    });
    console.log(`The result was: ${JSON.stringify(result)}`);
  }
  catch (err) {
    console.log("kyyaaaaa it returns error!");
  }
>>>>>>> b701ec8f685c6b9ddeae624f1dafe26c635f2efe
}

const Page=()=>{
  return(
    <div>
      <h1>Page</h1>
    </div>
  )
}
