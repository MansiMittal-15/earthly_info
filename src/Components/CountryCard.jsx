import { Link } from "react-router-dom"

const CountryCard = ({countryName, population, region, capital, flag, cardColor, color, data}) => {
  return (
    <>
    <Link to={`/${countryName}`} state={data} >
      <div className="country-card" style={{backgroundColor:cardColor, color:color}}>
        <img src={flag} alt="Country" />
        <div className="country-details" >
            <h2>{countryName}</h2>
            <div>
                <p><b>Population: </b>{population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Capital: </b>{capital}</p>
            </div> 
        </div>
      </div>
    </Link>
    </>
  )
}

export default CountryCard
