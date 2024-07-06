import { createBrowserRouter } from "react-router-dom";
import App from "../App";



import { adminRoutes } from "./admin.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   
  },

  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },

  {
    path: "/admin",
    element: <App />,
    children:adminRoutes, 
      
  },
  {
    path: "/faculty",
    element: <App />,
    children:adminRoutes, 
      
  },
  {
    path: "/student",
    element: <App />,
    children:adminRoutes, 
      
  },
]);