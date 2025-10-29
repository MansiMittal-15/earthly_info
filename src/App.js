import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

const App = ({modeHandler, mode, bgc, color}) => {
  return (
    <>
      <Header changeMode={modeHandler} mode={mode} bgc={bgc} color={color} />
      <Outlet /> 
    </>
  );
};

export default App;
