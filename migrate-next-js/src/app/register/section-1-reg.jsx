"use client";
import React, { Component } from "react";
import styles from "../style";

const Section1reg = () => {
  // // usestate for loading data from API and set data from API to data
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  // // get data from API
  // const getDataRegisterApi = async () => {
  //   const data = await axios.get(
  //     "https://ourtoga.com/api_register/dENWTWVaeUFiVUZKUExUUTJNVGd6TWpjd09UVnVSRDlRVWtRNU5UZ3hNemMyYm1jPQ=="
  //   );
  //   // if data has been initialized then set the loading to false
  //   // and then set the data needed to the data useState
  //   setLoading(false);
  //   setData(data.data);
  // };

  // useEffect(() => {
  //   // this is used to stop looping the data each time theres any changes or update or re-render the page
  //   getDataRegisterApi();
  // }, []);

  // if (loading) {
  //   console.log("Loading data...");
  // } else {
  //   console.log("Data:", data);
  // }

  return (
    <div className={`${styles.flexStart2} mt-[50px]`}>
      <div className={``}>
        <h1 className={`${styles.heading2}`}>Daftar Jadwal Acara FRAC</h1>
        <div className={`pt-[10px]`}>
          <p className={`${styles.paragraph}`}>
            Silahkan Mendaftar Ke Salah Satu Acara Di Bawah Ini
            {/* {elements} */}
          </p>
        </div>
      </div>
      {/* <div>
        AYO BERGABUNG DENGAN KAMI UNTUK MELIHAT KEASIKAN BELAJAR FINANCIAL
        MODELER!!
      </div> */}
    </div>
  );
};

export default Section1reg;
