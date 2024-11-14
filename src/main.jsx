import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './index.css'
import router from './Router/AllRouter.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
