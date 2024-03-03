import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './Pages/Projects.jsx';
import LandingPage from './Components/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/devportfolio/",
    element: <LandingPage/>,
  },
  {
    path: "/devportfolio/projects",
    element: <Projects/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
