'use client'
import React, { Component, useState, useRef, useReducer, useEffect } from 'react'
import axios, { Axios } from 'axios'
import styles, { layout } from '../style';
import Section2reg from './section-2-reg';
import { get } from 'http';


class Register extends Component {

}

const Section1reg = () => {

    const [data, setData] = useState("");
    //to limit looping
    const xData = useRef()
    // const [eventName, setEventName] = useState("");
    // const [startDate, setStartDate] = useState("");
    // const [endDate, setEndDate] = useState("");
    // const [registerLink, setRegisterLink] = useState("")
        axios.get("https://ourtoga.com/api_register/dENWTWVaeUFiVUZKUExUUTJNVGd6TWpjd09UVnVSRDlRVWtRNU5UZ3hNemMyYm1jPQ==").then((response) => {
            console.log(`The data API : ${JSON.stringify(response)}`)
            let newData = response.data[0]

            console.log(`New Data value " ${newData}`)
           
            // setEventName(response?.data[0]?.event_name);
            // setStartDate(response?.data[0]?.start_date);
            // setEndDate(response?.data[0]?.end_date);
            // setRegisterLink(response?.data[0]?.register_link);
        })


    // getDataRegisterApi()

   

    useEffect(()=>{
        // setData(response.data[0])
    })
    // const reducer = (action, state) => {
        //     switch (action.type) {
            //         case 'callingData':
            //             return { data1: state.getDataRegisterApi(), button: state.button };
            //         case 'clickButtonTrigger':
            //             return { data1: state.getDataRegisterApi(), button: !state.button };
    //         default:
    //             return state;
    //     }
    // }
    // const [state, dispatch] = useReducer(reducer, { data1: getDataRegisterApi(), button: true })

    return (
        <div className={`${styles.flexStart2} mt-[50px]`}>
            <div className={``}>
                <h1 className={`${styles.heading2}`}>
                    Register FRAC Program
                </h1>
                <div className={`pt-[10px]`}>
                    <p className={`${styles.paragraph}`}>
                        Let's register to our program
                    </p>
                </div>
            </div>
            {
                
            }
            {/* { data.map((datas)=>(
    
                <div key={datas.id}>
                    <h1>Program name: {datas.program_name}</h1>
                    <h2>The event name : {datas.event_name}</h2>
                    <button onClick={datas.register_link}>Register</button>
                </div>
            ))
            } */}
            
            {/* <div className={`${styles.flexStart2}`}>
                <h2>{data}</h2>
                <br/>
                <h2>{eventName}</h2>
                <button onClick={()=>{
                    dispatch({type :'callingDAta'});
                    dispatch({type:'clickButtonTrigger'});
                }}>click</button>
            </div> */}

        </div>
    )
}

export default Section1reg