import React, {useEffect, useState} from 'react'
import {AxiosConfig} from "../config/axios.js";


const UseFetch = (url) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = () => {
            try {

                setTimeout(() => {
                    AxiosConfig.get(url).then((response) => {
                        setData(response.data);
                        setLoading(false);
                    })
                }, 300);
            } catch (e) {
                console.log(e);
            }
        };
        getData();
    }, []);

    return {data, loading};
}
export default UseFetch
