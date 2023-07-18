import  { useEffect, useState } from "react";
import { AxiosConfig } from "../config/axios.js";

const UseFetch = (word) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      try {
        AxiosConfig.get(word).then((response) => {
          setData(response.data);
          setLoading(false);
        });
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [word]);

  return { data, loading };
};
export default UseFetch;
