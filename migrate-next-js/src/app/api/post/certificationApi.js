"use client";
import{ useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const Certified_person_data = () => { 
    const [list_person, setListPerson] = useState([]);
    const [loading, setLoading] = useState(true);
    const tuday = moment().format("yyyy-mm-DD");


    const getDataCertificationApi = async () => {
        const dataApi = await axios.get(
          "https://ourtoga.com/api_cert_list/NVBxZU04S1V2VUZKUExUUTJNVGd6TWpjd09UVnVSRDlRVWtRNU5UZ3hNemMyYm1jPQ=="
        );

        // if data has been initialized then set the loading to false
        // and then set the data needed to the data useState
        setLoading(false);
        // setListPerson(dataApi.data);
    
        // filter data
        let data_filtered = [];
        const filtering_data =
            Array.isArray(dataApi.data)
                ? dataApi.data.map((items) => {
                    // console.log('===> items', items);
                        if (items.expire_date > tuday) {
                          data_filtered.push(items);
                      } //else {
                        // console.log("===> false", false);
                    //   }
                }, null)
                : "dataApi is not an array";
        setListPerson(data_filtered);
    };
    
    useEffect(() => {
        // this is used to stop looping the data each time theres any changes or update or re-render the page
        getDataCertificationApi();
    }, []);


    return (
        list_person
    );
}

export default Certified_person_data;