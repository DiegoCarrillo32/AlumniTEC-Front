import React, { createContext } from 'react'
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
import { JobOffer } from './pages/JobOffer/JobOffer';
import { Activity } from './pages/Activity/Activity';


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
      ,
      {
        path: "joboffer",
        element: <JobOffer/>,
      },
      {
        path: "activity",
        element: <Activity/>,
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
