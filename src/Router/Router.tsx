
import { createHashRouter as CreateRouter } from "react-router-dom";
import App from "../App";
import { Catalog } from "../components/Catalog/Catalog";
import { NotFoundRedirect } from "../components/NotFoundPage/NotFoundRedirect";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";
import Home from "../pages/Home";
import Leyout from "../pages/Leyout";
import ItemPage from '../pages/ItemPage';
import { CartPage } from "../pages/CartPage/CartPage";
import { Favourites } from "../pages/Favourites";
import { Contacts } from "../pages/Contacts/Contacts";
import { Registration } from "../pages/RegistrationForm";

export const router = CreateRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundRedirect />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Catalog />,
      },
      {
        path: '/products/:itemId',
        element: <ItemPage />,
      },
      {
        path: '/item',
        element: <ItemPage />,
      },
      {

        path: "/cart",
        element: <CartPage />   
      },
      {
        path: "/favourites",
        element: <Favourites />   
      },
      {
        path: "/contacts",
        element: <Contacts />   
      },
      {
        path: "/registration",
        element: <Registration />   
      }
    ],
  },
]);
