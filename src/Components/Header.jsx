import Moon from "../photos/moon.png";
import Sun from "../photos/sun1.png";

const Header = ({ changeMode, mode, bgc, color }) => {
  return (
    <>
      <header className="header" style={{ backgroundColor: bgc, color: color }}>
        <div className="header-cont">
          <h1>Earthly Info</h1>
          <div className="header-content" onClick={changeMode}>
            {mode ? (
              <img src={Moon} alt="Sun" className="moonImage" />
            ) : (
              <img src={Sun} alt="Moon" className="sunImage" />
            )}
            {mode ? <p>Dark Mode</p> : <p>Light Mode</p>}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
