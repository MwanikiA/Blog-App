import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Create from './pages/create.jsx'

const paths = createBrowserRouter([
  {
    path: "",
    element: <App/>
  },
  {
    path: "/create",
    element: <Create/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>,
)