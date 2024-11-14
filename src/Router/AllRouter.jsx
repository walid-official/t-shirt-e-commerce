import React from 'react';
import { createBrowserRouter} from "react-router-dom";
import Root from '../layout/Root';
import Home from '../pages/Home';
import ProductDetails from '../components/Products/ProductDetails';
const router = createBrowserRouter([
    {
      path: "/",
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
              loader: () => fetch("../Products.json")
            },
            {
              path: "/productDetails/:productId",
              element: <ProductDetails></ProductDetails>,
              loader: () => fetch("../Products.json")
            }
          ]
        }
      ]
    },
  ]);

export default router;