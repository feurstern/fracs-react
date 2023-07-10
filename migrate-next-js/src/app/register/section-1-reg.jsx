<<<<<<< HEAD
"use client";
import React, { Component, useState, useReducer } from "react";
import axios, { Axios } from "axios";
import styles, { layout } from "../style";
import Section2reg from "./section-2-reg";
=======
'use client'
import React, { Component, useState, useRef, useReducer, useEffect } from 'react'
import axios, { Axios } from 'axios'
import styles, { layout } from '../style';
import Section2reg from './section-2-reg';
>>>>>>> ea98022621b03c09b7d5ac5ec044a99ca215e029

class Register extends Component {}

const Section1reg = () => {
  const [data, setData] = useState([]);

<<<<<<< HEAD
  // const [data, setData] = useState("");
  // const [eventName, setEventName] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  // const [registerLink, setRegisterLink] = useState("");

  const getDataRegisterApi = () => {
    axios
      .get(
        "https://ourtoga.com/api_register/dENWTWVaeUFiVUZKUExUUTJNVGd6TWpjd09UVnVSRDlRVWtRNU5UZ3hNemMyYm1jPQ=="
      )
      .then((response) => {
        console.log(`The data API : ${JSON.stringify(response)}`);
        setData(response?.data);
        // setEventName(response?.data[0]?.event_name);
        // setStartDate(response?.data[0]?.start_date);
        // setEndDate(response?.data[0]?.end_date);
        // setRegisterLink(response?.data[0]?.register_link);
      });
  };

  // const reducer = (action, state) => {
  //   switch (action.type) {
  //     case "callingData":
  //       return { data1: state.getDataRegisterApi(), button: state.button };
  //     case "clickButtonTrigger":
  //       return { data1: state.getDataRegisterApi(), button: !state.button };
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, {
  //   data1: getDataRegisterApi(),
  //   button: true,
  // });

  return (
    <div className={`${styles.flexStart2} mt-[50px]`}>
      <div className={``}>
        <h1 className={`${styles.heading2}`}>Register FRAC Program</h1>
        <div className={`pt-[10px]`}>
          <p className={`${styles.paragraph}`}>Let's register to our program</p>
        </div>
      </div>
      {/* { data.map((datas)=>(
=======
    const [data, setData] = useState("");
    //to limit looping
    const xData = useRef()
    // const [eventName, setEventName] = useState("");
    // const [startDate, setStartDate] = useState("");
    // const [endDate, setEndDate] = useState("");
    // const [registerLink, setRegisterLink] = useState("")

    const getDataRegisterApi = () => {
        axios.get("https://ourtoga.com/api_register/dENWTWVaeUFiVUZKUExUUTJNVGd6TWpjd09UVnVSRDlRVWtRNU5UZ3hNemMyYm1jPQ==").then((response) => {
            console.log(`The data API : ${JSON.stringify(response)}`)
            let data = response.data;
            let arrayConvert = Object.entries(data);
            console.log(`The value of array convert : ${arrayConvert}`)

            setData(arrayConvert);

            // console.log(`data type : ${typeof ()}`)

            // setEventName(response?.data[0]?.event_name);
            // setStartDate(response?.data[0]?.start_date);
            // setEndDate(response?.data[0]?.end_date);
            // setRegisterLink(response?.data[0]?.register_link);
        })
    };
    
    // getDataRegisterApi()

    useEffect(() => {
        getDataRegisterApi()
    }, [])

    const elements =[];

    for(let item in data){
        data.hasOwnProperty(item) ? elements.push(
            <div key={item}>
                Item : {item} value : {data[item]}
            </div>
        )
        : 0
    }
    console.log(`The value of elements are ${elements}`)

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
                        {/* {elements} */}
                    </p>
                    
                </div>
            </div>
            {
                elements.map((data)=>(
                    <div>
                        The program name :{data?.program_name}
                    </div>
                ))
            }
            {/* { data.map((datas, index)=>(
>>>>>>> ea98022621b03c09b7d5ac5ec044a99ca215e029
    
                <div key={datas.num}>
                    <h1>Program name: {datas[index].program_name}</h1>
                    <h2>The event name : {datas[index].event_name}</h2>
                    <button onClick={datas[index].register_link}>Register</button>
                </div>
            ))
            } */}

<<<<<<< HEAD
      {/* <div className={`${styles.flexStart2}`}>
=======
            {/* <div className={`${styles.flexStart2}`}>
>>>>>>> ea98022621b03c09b7d5ac5ec044a99ca215e029
                <h2>{data}</h2>
                <br/>
                <h2>{eventName}</h2>
                <button onClick={()=>{
                    dispatch({type :'callingDAta'});
                    dispatch({type:'clickButtonTrigger'});
                }}>click</button>
            </div> */}
    </div>
  );
};

export default Section1reg;
