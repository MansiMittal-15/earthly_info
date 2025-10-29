import { useState } from "react";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import CountriesList from "./CountriesList";

const Home = ({ mainColor, cardColor, color }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <main style={{ backgroundColor: mainColor }}>
        <div className="main-container-home">
          <div className="searchBar-dropdown">
            <SearchBar setSearchValue={setSearchValue} />
            <Dropdown setSearchValue={setSearchValue} />
          </div>
          <CountriesList
            cardColor={cardColor}
            color={color}
            value={searchValue}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
