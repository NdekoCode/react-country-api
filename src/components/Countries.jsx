import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Card from "./Card";
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
  const { data, dataLoading, dataError } = state;
  if (dataLoading) {
    return (
      <div className="countries">
        <h1 className="title">Countries</h1>
        <div className="countries-container">
          <Loader />
        </div>
      </div>
    );
  }
  return (
    <div className="countries">
      <ul>
        {data.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
