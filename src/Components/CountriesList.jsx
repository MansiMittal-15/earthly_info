import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";
import countriesData from "../countriesData.js";

const CountriesList = ({ cardColor, color, value }) => {
  // const [countriesData, setCountriesData] = useState([]);
  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountriesData(data);
  //     });
  // }, []);

  return countriesData.length === 0 ? (
    <CountryListShimmer />
  ) : (
    <>
      <div className="countries-list-container">
        {countriesData
          .map((country) => {
            return (
              <CountryCard
                key={country.flags.png}
                countryName={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flags.png}
                cardColor={cardColor}
                color={color}
                data={country}
              />
            );
          })
          .filter((elem) => {
            return (
              elem.props.countryName
                .toLowerCase()
                .includes(value.toLowerCase()) ||
              elem.props.region.toLowerCase().includes(value.toLowerCase())
            );
          })}
      </div>
    </>
  );
};

export default CountriesList;
