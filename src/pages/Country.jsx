import React, { useEffect, useState, useTransition } from "react";
import { GetCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await GetCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  const searchCountry = (country) => {
    if (search)
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    return country;
  };
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        countries={countries}
        setCountries={setCountries}
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, i) => {
          return <CountryCard country={curCountry} key={i} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
