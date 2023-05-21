import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Components/Home/Main.jsx';
import Login from './Components/Authenticaton/Login.jsx';
import Register from './Components/Authenticaton/Register.jsx';
import AuthProvider from '../AuthProvider.jsx';
import Blogs from './Components/Blogs.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import AddToys from './Components/PrivateRoute/AddToys.jsx';
import MyToys from './Components/PrivateRoute/MyToys.jsx';
import UpdateToys from './Components/PrivateRoute/UpdateToys.jsx';
import AllToys from './Components/PrivateRoute/AllToys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Register></Register>
      },
      {
        path:"/blogs",
        element:<PrivateRoute><Blogs></Blogs></PrivateRoute>
      },
      {
        path:"/addToys",
        element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path:"/addedToysCollection",
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:"/updateToys/:id",
        element:<PrivateRoute><UpdateToys></UpdateToys></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/addToys/${params.id}`)
      },
      {
        path:"/allToys",
        element:<PrivateRoute><AllToys></AllToys></PrivateRoute>,
        loader:() => fetch('http://localhost:5000/addToys')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
