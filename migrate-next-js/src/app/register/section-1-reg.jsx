'use client'
import React, { Component, useState, useReducer} from 'react'
import axios, { Axios } from 'axios'
import styles, {layout} from '@/app/style';


class Register extends Component {

}

const Section1reg = () => {

    const [data, setData] = useState("");
    const [eventName, setEventName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [registerLink, setRegisterLink]= useState("");

    
    const getDataRegisterApi = () => {
        axios.get("https://ourtoga.com/api_register/dENWTWVaeUFiVUZKUExUUTJNVGd6TWpjd09UVnVSRDlRVWtRNU5UZ3hNemMyYm1jPQ==").then((response) => {
            console.log(`The data API : ${JSON.stringify(response)}`)
            setData(response?.data[0]?.program_name);
            setEventName(response?.data[0]?.event_name);
            setStartDate(response?.data[0]?.start_date);
            setEndDate(response?.data[0]?.end_date);
            setRegisterLink(response?.data[0]?.register_link);
        })
    };
   
    const reducer=(action, state)=>{
        switch(action.type){
            case 'callingData':
                return{data1:state.getDataRegisterApi(), button:state.button};
            case 'clickButtonTrigger':
                return{data1 : state.getDataRegisterApi(), button:!state.button};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer,{data1: getDataRegisterApi(), button:true})

    return (
        <div className={`${styles.flexStart2}`}>
            <div className={`${styles.flexStart2}`}>
                <h1 className={`${styles.heading2}`}>
                    Register
                </h1>
            </div>
            <div className={`${styles.flexStart2}`}>
                <h2>{data}</h2>
                <br/>
                <h2>{eventName}</h2>
                <button onClick={()=>{
                    dispatch({type :'callingDAta'});
                    dispatch({type:'clickButtonTrigger'});
                }}>click</button>
            </div>
        </div>
    )
}

export default Section1reg
