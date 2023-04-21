import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './pages/Login/Login';
import './index.css'
import { Toaster } from 'sonner'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Home } from './pages/Home/Home';
import { Alumni } from './pages/Alumni/Alumni';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { DetailedAlumni } from './pages/DetailedAlumni/DetailedAlumni';
import { Specialization } from './pages/Specialization/Specialization';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <Dashboard/>
    </PrivateRoute>,
    children: [
      {
        path: "",
        element: <Home/>,
        
      },
      {
        path: "alumni",
        element: <Alumni/>,
      
      },
      {
        path: ":id",
        element: <DetailedAlumni/>,
      }
      ,
      {
        path: "specialization",
        element: <Specialization/>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster />
  </React.StrictMode>,
)
