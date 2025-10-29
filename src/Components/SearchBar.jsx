import Magnifier from "../photos/magnifying-glass.png";

const SearchBar = ({ setSearchValue }) => {
  return (
    <>
      <div className="search-bar-div">
        <img src={Magnifier} alt="Magnifier" className="magnifying-glass" />
        <input
          type="search"
          placeholder={"Search for a Country..."}
          className="search-bar-input"
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
