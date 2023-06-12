import React, {useState} from 'react'
import axios, {Axios} from 'axios'

const Section1reg = () => {
    const [data, setData] = useState("");

    const getDataRegisterApi=()=>{
        axios.get("https://ourtoga.com/api_register/dENWTWVaeUFiVUZKUExUUTJNVGd6TWpjd09UVnVSRDlRVWtRNU5UZ3hNemMyYm1jPQ==").then((response)=>{
            console.log(`The data API : ${JSON.stringify(response)}`)
            setData(response?.data[0]?.event_name);  
        })
    }


  return (
    <div onLoad={getDataRegisterApi}>
        <h1>Register page will appear here</h1>  
        <h2>{data}</h2>
        <button onClick={getDataRegisterApi}>click</button>
    </div>
  )
}

export default Section1reg
