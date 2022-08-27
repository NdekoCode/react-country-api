import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Card from "./Card";
const Countries = () => {
  const [state, setState] = useState({
    data: [],
    dataLoading: true,
    dataError: "",
  });
  const [rangeValue, setRangeValue] = useState(36);
  const [selectContinent, setContinent] = useState("");
  const radios = [
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
    "North America",
    "South America",
  ];
  const handleRange = useCallback((evt) => {
    setRangeValue(evt.target.value);
  });
  const handleContinent = useCallback((evt) => {
    setContinent(evt.target.id);
  });
  const getData = () => {
    if (selectContinent) {
      return data
        .filter((country) => country.continents[0] === selectContinent)
        .sort((a, b) => b.population - a.population)
        .slice(0, rangeValue)
        .map((country, index) => <Card key={index} country={country} />);
    } else {
      return data
        .slice(0, rangeValue)
        .sort((a, b) => b.population - a.population)
        .map((country, index) => <Card key={index} country={country} />);
    }
  };
  console.log(rangeValue);
  useEffect(() => {
    try {
      axios.get("https://restcountries.com/v3.1/all").then((res) => {
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
  const clearFilterContinent = () => {
    setContinent("");
  };
  console.log(selectContinent);
  if (dataLoading) {
    return (
      <div className="countries">
        <div className="countries-container">
          <Loader />
        </div>
      </div>
    );
  }
  return (
    <div className="countries">
      <ul className="radio-container">
        <li>
          <input
            type="range"
            min={1}
            onChange={handleRange}
            max={250}
            name="range"
            id="range"
          />
        </li>
        {radios.map((continent, index) => (
          <li key={index}>
            <input
              // ON verifie si le continent selectionner correspond à celui qui est dans l'API
              checked={continent === selectContinent}
              name="continent"
              onChange={handleContinent}
              type="radio"
              id={continent}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {/* Si on fait un filtre alors affiche le button pour annuler le filtre */}
      {selectContinent && (
        <button onClick={clearFilterContinent}>Annuler la recherche</button>
      )}
      <ul>{getData()}</ul>
    </div>
  );
};

export default Countries;
