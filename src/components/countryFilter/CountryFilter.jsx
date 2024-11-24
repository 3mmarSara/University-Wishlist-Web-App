import { useState } from "react";
import "./CountryFilter.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const CountryFilter = ({ setCountry }) => {
  const navigation = useNavigate();
  let [con]  = useSearchParams();

  const countries = [
    "All",
    "United Kingdom",
    "United States",
    "Canada",
    "Germany",
  ];
  const [activeCountry, setActiveCountry] = useState(con.get("con"));

  const handleCountryClick = (country) => {
    setActiveCountry(country);

    setCountry(country === "All" ? "" : country);
    // window.URL.append("country", country);
   
    // const currentPath = location.pathname // to get current route
    navigation(`/?con=${country}`) ;
  };

  return (
    <div className="country-filter">
      Filter country:
      {countries.map((country) => (
        <div
          key={country}
          onClick={() => handleCountryClick(country)}
          className={`country-option ${
            country === activeCountry ? "active" : ""
          }`}
        >
          {country}
        </div>
      ))}
    </div>
  );
};

export default CountryFilter;
