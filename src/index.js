import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Orders from './Components/Orders/Orders';
// import Dashboard from './Components/Dashboard/Dashboard';
import Maindash from './Components/Maindash/Maindash';
import Customers from './Components/Customers/Customers';
import Products from './Components/Products/Products';
// import { BrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path:'',
            element: <Maindash />
          },
          {
            path:"order",
            element: <Orders/>
          },
          {
            path:"customer",
            element:<Customers />
          },
          {
            path:"products",
            element:<Products />
          }
        ]
      }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
