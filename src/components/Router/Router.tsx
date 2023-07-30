import { createHashRouter as CreateRouter } from "react-router-dom";
import App from "../../App";
import Slider from "../slider/Slider";
import { Phones } from "../Phones/Phones";
import { NotFoundRedirect } from "../NotFoundPage/NotFoundRedirect";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

export const router = CreateRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundRedirect />,
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
      },
      {
        path: "/not-found-page",
        element: <NotFoundPage />,
      }
    ],
  },
]);