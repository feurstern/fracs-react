import React, {Component, useState} from 'react'
import axios, {Axios} from 'axios'
import styles from '../../style';


class Register extends Component{

}

const Section1reg = () => {
    const [data, setData] = useState("");
    const [eventName, setEventName] = useState("");

    const getDataRegisterApi=()=>{
        axios.get("https://ourtoga.com/api_register/dENWTWVaeUFiVUZKUExUUTJNVGd6TWpjd09UVnVSRDlRVWtRNU5UZ3hNemMyYm1jPQ==").then((response)=>{
            console.log(`The data API : ${JSON.stringify(response)}`)
            setData(response?.data[0]?.program_name);
            setEventName(response?.data[0]?.event_name);
        })
    }


  return (
    <div className={`${styles.flexStart2}`} onLoad={getDataRegisterApi}>
       <div className={`${styles.flexStart2}`}>
         <h1 className={`${styles.heading2}`}>
            Register
         </h1>
       </div>  
        <h2>{data}</h2>
         <h2>{eventName}</h2>
        <button onClick={getDataRegisterApi}>click</button>
    </div>
  )
}

export default Section1reg
