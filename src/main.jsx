import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './pages/Login/Login';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Home } from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "",
        element: <Home/>,
        
      },
      {
        path: "alumni",
        element: <div>Alumnus</div>,
        
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
