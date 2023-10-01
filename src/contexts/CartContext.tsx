import {createContext, ReactNode, useState} from 'react'

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CarProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export default function CartProvider({children}: CarProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])

  return(
    <CartContext.Provider value={{ cart, cartAmount: cart.length }}>
      {children}
    </CartContext.Provider>
  )
}