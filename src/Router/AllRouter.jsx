import React from 'react';
import { createBrowserRouter} from "react-router-dom";
import Root from '../layout/Root';
import Home from '../pages/Home';
import ProductDetails from '../components/Products/ProductDetails';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import PrivetRouter from '../components/PrivetRouter/PrivetRouter';

import ErrorPage from '../pages/ErrorPage';
import ShirtDetail from '../components/shirtDetails/ShirtDetail';



const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('../Categories.json'),
          children: [
            {
              path: "/",
              element: <ProductDetails></ProductDetails>,
              loader: () => fetch("/Products.json")
            },
            {
              path: "/productDetails/:productId",
              element: <ProductDetails></ProductDetails>,
              loader: () => fetch("/Products.json")
            }
          ]
        },
        {
          path: "/shirtDetails/:shirtId",
          element: <ShirtDetail></ShirtDetail>,
          loader: () => fetch("/Products.json")
        },
        {
          path: "/About",
          element: <About></About>
        },
        {
          path: "/Dashboard",
          element:<PrivetRouter><Dashboard></Dashboard></PrivetRouter>,
          loader: () => fetch("/Products.json")
        },
        {
          path: "/Contact",
          element: <Contact></Contact>
        }
      ]
    },
  ]);

export default router;