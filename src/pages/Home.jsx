import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";
import {
  useGetCountriesInARegionQuery,
  useGetCountriesQuery,
  useGetDetailInfoQuery,
} from "../services/countryAPI";
import { updateCountryList } from "../services/countrySlice";

const Home = () => {
  const { region = "world" } = useParams();
  const { data: allCountries } = useGetCountriesQuery();
  const { data: countriesInARegion } = useGetCountriesInARegionQuery(region);
  const countries = useSelector((state) => state.countries.countries);
  const name = useSelector((state) => state.countries.searchInput);
  console.log(name);
  const dispatch = useDispatch();

  // images index on display
  // const [startIndex, setStartIndex] = useState(0);
  // const [endIndex, setEndIndex] = useState(8);
  useEffect(() => {
    region === "world" && allCountries
      ? dispatch(updateCountryList(allCountries))
      : countriesInARegion && dispatch(updateCountryList(countriesInARegion));
  }, [allCountries, countriesInARegion]);
  return (
    <div className="dark:bg-dark-mode-background flex-1">
      <div className="flex justify-between px-6 py-6 flex-col gap-3 md:flex-row">
        <SearchBar />
        <Dropdown />
      </div>
      <div className="grid md:grid-cols-2 px-10 grid-cols-1 lg:grid-cols-4 gap-9 ">
        {countries
          .filter((country) =>
            country.name.official.toLowerCase().includes(name.toLowerCase())
          )
          .map((country) => (
            <Card key={country.ccn3} country={country}>
              {country.capital}
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Home;
