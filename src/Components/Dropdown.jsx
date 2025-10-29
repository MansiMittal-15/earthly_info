const Dropdown = ({ setSearchValue }) => {
  return (
    <>
      <select
        id="dropdown"
        onChange={(event) => setSearchValue(event.target.value)}
      >
        <option value="" hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
      </select>
    </>
  );
};

export default Dropdown;
