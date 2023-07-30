import { createHashRouter as CreateRouter } from "react-router-dom";
import App from "../../App";
import Slider from "../slider/Slider";
import { Phones } from "../Phones/Phones";

export const router = CreateRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <></>,
    children: [
      {
        path: "/home",
        element: <Slider />,
      },
      {
        path: "/phones",
        element: <Phones/>,
      },
      {
        path: "tablets",
        element: <></>,
      },
      {
        path: "accessories",
        element: <></>,
      }
    ],
  },
]);