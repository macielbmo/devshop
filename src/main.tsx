import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { Router } from './router.tsx'

import CartProvider from './contexts/CartContext.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={Router}/>
    </CartProvider>
  </React.StrictMode>,
)
