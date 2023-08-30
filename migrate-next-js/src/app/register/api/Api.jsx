"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios, { Axios } from "axios";
import moment from "moment";
import styles from "../../style";

import Expired from "../../eventnotfound/Expired";

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const tuday = moment().format("yyyy-mm-DD");

  // get data from API
  const getDataRegisterApi = async () => {
    const dataApi = await axios.get(
      "https://ourtoga.com/api_register/dENWTWVaeUFiVUZKUExUUTJNVGd6TWpjd09UVnVSRDlRVWtRNU5UZ3hNemMyYm1jPQ=="
    );
    // console.log("===> dataApi", dataApi);
    // if data has been initialized then set the loading to false
    // and then set the data needed to the data useState
    setLoading(false);
    // setData(data.data);

    // filter data
    let data_filtered = [];
    const filtering_data = Array.isArray(dataApi.data)
      ? dataApi.data.map((items) => {
          if (items.start_date >= tuday) {
            data_filtered.push(items);
          } //else {
          //   // console.log("===> false", false);
          // }
        }, null)
      : "not an array";

    // console.log("===> filtering_data", filtering_data);
    setData(data_filtered);
  };

  useEffect(() => {
    // this is used to stop looping the data each time theres any changes or update or re-render the page
    getDataRegisterApi();
  }, []);
  return (
    <div>
      {data.length > 0 ? (
        data?.map((data) => (
          <div className={`${styles.registerProgramContainer} pt-[20px] mb-5`}>
            <section className={``} key={data?.num}>
              <motion.div
                initial={{ opacity: 0.1, scale: 0.5, x: 1 - 400 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "fade in",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                className="max-w-sm pr-bg-white border border-gray-200 rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href={data?.register_link} target="_blank">
                  <img
                    className="rounded-t-2xl"
                    src="https://media.getmyuni.com/assets/images/articles/group-discussion-topics-for-college-students.webp"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href={data?.register_link} target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data?.program_name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data?.event_name}
                  </p>
                  <h3 className="pt-[5px] mb-3 text-white">
                    Harga : {data?.price}
                  </h3>
                  <a
                    href={data?.register_link}
                    target="_blank"
                    className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Daftar
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </section>
          </div>
        ))
      ) : (
        <div className="pb-[50px] mb-5">
          <Expired />
        </div>
      )}
    </div>
  );
};

export default Api;
