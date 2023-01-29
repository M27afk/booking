import axios from "axios";
const { useState } = require("react");
const { useEffect } = require("react");

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  useEffect(() => {
    setloading(true);
    const fetchdata = async () => {
      try {
        const res = await axios.get(url);
        
        setData(res.data);
      } catch (err) {
        seterror(err);
      }
      setloading(false);
    };
    fetchdata();
  }, [url]);

  const refetch = async () => {
    setloading(true);

    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      seterror(err);
    }

    setloading(false);
  };

  return { data, loading, error, refetch };
};

export default useFetch;
