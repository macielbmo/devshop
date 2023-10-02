import { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { cart, resultCart, addItemCart, removeItemCart } = useContext(CartContext)

  return (
    <div>
      <main className="w-full max-w-7xl mx-auto">
        <h1 className="font-medium text-2xl text-center my-4">
          Meu Carrinho
        </h1>

        {cart.length === 0 && (
          <div className='flex flex-col justify-center items-center'>
            <p className='font-medium'>Ops, seu carrinho está vazio...</p>
            <Link className='bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded' to='/'>Acessar Produtos</Link>
          </div>
        )}

        {cart.map( (item) => (
          <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
            <img
              className="w-28"
              src={item.cover} 
              alt={item.title} />

            <strong>Preço: {item.price.toLocaleString("pt-BR", {
                  style: "currency", currency: "BRL"
                })}</strong>

            <div className="flex gap-3">
              <button onClick={() => removeItemCart(item)} className="bg-slate-600 px-2 rounded text-white flex items-center justify-center">
                -
              </button>

              <span>{item.amount}</span>

              <button onClick={() => addItemCart(item)} className="bg-slate-600 px-2 rounded text-white flex items-center justify-center">
                +
              </button>
            </div>

            <strong className="float-right">
              SubTotal: {item.total.toLocaleString("pt-BR", {
                  style: "currency", currency: "BRL"
                })}
            </strong>
        </section>
        ))}

        {cart.length !== 0 && (
          <div>
            <p className="font-bold mt-4">Total: {resultCart}</p>
          </div>
        )}
      </main>
    </div>
  )
}