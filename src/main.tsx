import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Pais from './components/Pais';

const router = createBrowserRouter([
  {
    path: "/dados-paises",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "dados-paises/:id",
    element: <Pais />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
