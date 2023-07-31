import { useEffect, useState } from "react";
import { AxiosConfig } from "../config/axios.js";

const UseFetch = (word) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setIsSuccess(false);
      try {
        const response = await AxiosConfig.get(word);
        setData(response.data);
        setLoading(false);
        setIsSuccess(true);
      } catch (e) {
        console.log(e);
        setIsSuccess(false);
        setLoading(false);
      }
    };
    getData();
  }, [word]);

  return { data, loading, isSuccess };
};
export default UseFetch;
