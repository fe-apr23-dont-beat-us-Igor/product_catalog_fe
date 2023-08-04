import { createHashRouter as CreateRouter } from "react-router-dom";
import App from "../App";
import { Catalog } from "../components/Catalog/Catalog";
import { NotFoundRedirect } from "../components/NotFoundPage/NotFoundRedirect";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";
import Home from "../pages/Home";
import Leyout from "../pages/Leyout";
import { CartPage } from "../pages/CartPage/CartPage";
import { Favourites } from "../pages/Favourites";

export const router = CreateRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundRedirect />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/phones",
        element: <Catalog />,
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
      },
      {
        path: "/cart",
        element: <CartPage />   
      },
      {
        path: "/favourites",
        element: <Favourites />   
      }
    ],
  },
]);