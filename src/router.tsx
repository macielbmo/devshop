import { createBrowserRouter } from 'react-router-dom'

import Cart from "./pages/cart";
import Home from "./pages/home";
import Layout from './components/Layout';


const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
]) 

export { Router };