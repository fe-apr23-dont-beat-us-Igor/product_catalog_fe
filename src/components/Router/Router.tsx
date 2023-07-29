import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Slider from "../slider/Slider";

export const router = createBrowserRouter([
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
        element: <></>,
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