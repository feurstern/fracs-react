"use client";
import React, { Component, useState, useReducer, useEffect } from "react";
import axios, { Axios } from "axios";
import styles, { layout } from "../style";

const Section1reg = () => {
  const [data, setData] = useState([]);

  axios
    .get(
      "https://ourtoga.com/api_register/dENWTWVaeUFiVUZKUExUUTJNVGd6TWpjd09UVnVSRDlRVWtRNU5UZ3hNemMyYm1jPQ=="
    )
    .then((response) => {
      setData(response?.data);
    });
  const length = data.length;
  return (
    <div className={`${styles.flexStart2} mt-[50px]`}>
      <div className={``}>
        <h1 className={`${styles.heading2}`}>Register FRAC Program</h1>
        <div className={`pt-[10px]`}>
          <p className={`${styles.paragraph}`}>Let's register to our program</p>
        </div>

        <div className="flex d-flex">{`data length : ${data.length} and the saved variable is : ${length}`}</div>
      </div>
    </div>
  );
};

export default Section1reg;
