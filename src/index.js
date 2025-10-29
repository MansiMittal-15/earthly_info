import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import { useState } from "react";
import CardDetail from "./Components/CardDetail";
import ErrorPage from "./Components/ErrorPage";

function MainApp () {
  const [mode, setMode] = useState(true);
  const [bgc, setBgc] = useState("skyblue");
  const [color, setColor] = useState("black");
  const [cardColor, setCardColor] = useState("white");
  const [mainColor, setMainColor] = useState("white");

  const modeHandler = () => {
    if (mode === true) {
      setMode(false);
      setBgc("rgb(10, 10, 37)");
      setColor("white");
      setCardColor("rgb(10, 10, 37)");
      setMainColor("#0f0a1ddb");
    } else {
      setMode(true);
      setBgc("skyblue");
      setColor("black");
      setCardColor("white");
      setMainColor("white");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App modeHandler={modeHandler} bgc={bgc} color={color} mode={mode} />
      ),
      children: [
        {
          path: "/",
          errorElement: <ErrorPage mainColor={mainColor} color={color}/>,
          element: (
            <Home
              mainColor={mainColor}
              cardColor={cardColor}
              color={color}
            />
          ),
        },
        {
          path: "/:country",
          element: <CardDetail mainColor={mainColor} color={color} mode={mode} />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainApp />);
