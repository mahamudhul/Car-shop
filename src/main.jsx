import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './component/Home/Home'
import CarDetails from './component/AllCars/CarDetails'
// import Home from './component/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/cars.json')
      },
      {
        path: '/:id',
        element: <CarDetails></CarDetails>,
        loader: ({ params }) => fetch("/cars.json")
        // console.log(params.carsId)
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  ,
)
