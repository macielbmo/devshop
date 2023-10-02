import { useEffect, useState, useContext } from 'react'
import { useParams } from  'react-router-dom'
import { api } from '../../services/api'

import { CartContext } from '../../contexts/CartContext'
import { BsCartPlus } from 'react-icons/bs'

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export default function Product() {
  const { addItemCart } = useContext(CartContext)
  const [product, setProduct] = useState<ProductProps>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    cover: '',
  })

  const { id } = useParams()

  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`/products/${id}`)
      setProduct(response.data)
    }

    getProducts()
  }, [id])

  function hadleAddCarItem(product: ProductProps) {
    addItemCart(product)
  }

  return(
    <div className='max-md:flex-col w-full max-w-7xl px-4 mx-auto flex justify-center items-center'>
      <img 
        className='mx-10 h-72 rounded-lg mb-2'
        src={product.cover} 
        alt={product.title} />

      <div>
        <h1 className='font-bold my-3 text-2xl'>{product.title}</h1>

        <p>{product.description}</p>

        <div className='my-4 flex gap-4'>
          <strong className='text-zinc-700/90 text-2xl'>
            {product.price.toLocaleString("pt-BR", {
              style: "currency", currency: "BRL"
            })}
          </strong>

          <button onClick={() => hadleAddCarItem(product)} className='bg-zinc-900 p-1 rounded'>
            <BsCartPlus size={20} color="#FFF"/> 
          </button>
        </div>
      </div>
    </div>
  )
}