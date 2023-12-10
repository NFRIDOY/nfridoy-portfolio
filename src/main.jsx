import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from "./router/router.jsx";

import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx's
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
