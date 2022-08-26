import React, { useEffect, useState } from "react";
import axios from "axios";
const Countries = () => {
  const [state, setState] = useState({
    data: [],
    dataLoading: true,
    dataError: "",
  });

  useEffect(() => {
    try {
      axios.get("https://restcountries.com/v3.1/lang/french").then((res) => {
        if (res.status === 200) {
          setState((d) => ({ ...d, data: res.data, dataLoading: false }));
        } else {
          setState((d) => ({ ...d, dataLoading: false }));
        }
      });
    } catch (error) {
      setState((d) => ({ ...d, dataError: false }));
    }
  }, []);
  console.log(state);
  return (
    <div className="countries">
      <h1>Countries</h1>
    </div>
  );
};

export default Countries;
