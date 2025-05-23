import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const { currentCurrency, conversionRates } = useSelector(state => state.currency);

  const convertPrice = (price) => {
    const rate = conversionRates[currentCurrency].rate;
    const symbol = conversionRates[currentCurrency].symbol;
    return `${symbol}${(price * rate).toFixed(2)}`;
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <Link to={`/product/${product.id}`}>
      <div className='bg-white p-4 shadow rounded relative border
    transform transition-transform duration-300 hover:scale-105'>
        <img src={product.image} alt="" className='w-full h-48 object-contain mb-4' />
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500'>{convertPrice(product.price)}</p>
        <div className='flex items-center mt-2'>
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
        </div>
        <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100'
          onClick={(e) => handleAddToCart(e, product)}>
          <span className='group-hover:hidden'>+</span>
          <span className='hidden group-hover:block'>Add to cart</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
