import { useEffect, useState } from "react";
import LeftArrow from "../photos/leftArrow.png";
import WhiteLeftArrow from "../photos/whiteLeftArrow.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import CountryDetailShimmer from "./CountryDetailShimmer";

const CardDetail = ({ mainColor, color, mode }) => {
  // const countryName = new URLSearchParams(location.search).get("name");
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      population: data.population.toLocaleString("en-IN"),
      flag: data.flags.png,
      capital: data.capital?.join(", "),
      region: data.region,
      nativeName: data.name.nativeName
        ? Object.values(data.name.nativeName)
            .map((nativeName) => nativeName.official)
            .join(", ")
        : "",
      subRegion: data.subregion,
      currencies: data.currencies
        ? Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", ")
        : "",
      languages: data.languages ? Object.values(data.languages).join(", ") : "",
      topLevelDomain: data.tld.join(", "),
      timeZone: data.timezones.join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() => {
        setCountryData((prevState) => ({ ...prevState, borders }));
      }, 100);
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <ErrorPage mainColor={mainColor} color={color} />;
  }

  return countryData === null ? (
    <CountryDetailShimmer />
  ) : (
    <>
      <div
        className="countryDetailCard"
        style={{ backgroundColor: mainColor, color: color }}
      >
        <div className="countryDetailCard-container">
          <span>
            <button
              className="backBtn"
              onClick={() => {
                navigate("/");
              }}
              style={{ color: color, backgroundColor: mainColor }}
            >
              {" "}
              {mode ? (
                <img
                  src={LeftArrow}
                  alt="left-arrow"
                  id="leftArrowImg"
                  style={{ width: "15px", color: color, display: "flex" }}
                />
              ) : (
                <img
                  src={WhiteLeftArrow}
                  alt="left-arrow"
                  id="leftArrowImg"
                  style={{ width: "21px", color: color, display: "flex" }}
                />
              )}
              &nbsp; Back
            </button>
          </span>
          <div className="countryDetailsContainer">
            <img src={countryData.flag} alt={countryName + " Flag"} />
            <div className="countryDetails">
              <h1>{countryData.name}</h1>
              <div className="details">
                {
                  <p>
                    <b> Native Name:- </b> &nbsp;{" "}
                    <span>{countryData.nativeName} </span>{" "}
                  </p>
                }
                <p>
                  <b> Population:-</b>&nbsp;{" "}
                  <span>{countryData.population}</span>{" "}
                </p>
                <p>
                  <b> Region:- </b>&nbsp; <span>{countryData.region}</span>{" "}
                </p>
                <p>
                  <b>Sub Region:-</b>&nbsp; <span>{countryData.subRegion}</span>{" "}
                </p>
                <p>
                  <b>Capital:-</b> &nbsp;<span>{countryData.capital}</span>{" "}
                </p>
                <p>
                  <b>Top Level Domains:- </b> &nbsp;
                  <span> {countryData.topLevelDomain} </span>{" "}
                </p>
                <p>
                  <b>Currencies:-</b> &nbsp;
                  <span> {countryData.currencies} </span>{" "}
                </p>
                <p>
                  <b>Languages:-</b>&nbsp; <span>{countryData.languages} </span>{" "}
                </p>
                <p>
                  <b>Time Zones:-</b>&nbsp; <span>{countryData.timeZone} </span>{" "}
                </p>
              </div>
              {countryData.borders.length !== 0 && (
                <p style={{ padding: "6px" }} >
                  <b>Border Countries:-</b> &nbsp;
                  {countryData.borders.map((border) => (
                    <Link
                      className="border-link"
                      key={border}
                      style={{ backgroundColor: mainColor, color: color }}
                      to={`/${border}`}
                    >
                      {border}
                    </Link>
                  ))}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
