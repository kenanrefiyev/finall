import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../assets/images/emptycart.png';
import { FaTrashAlt, FaChevronLeft } from 'react-icons/fa';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const currency = useSelector((state) => state.currency.currentCurrency); // Mövcud valyuta
  const conversionRate = useSelector((state) => state.currency.conversionRates[currency]); // Mövcud valyutanın məzənnəsi
  const [address, setAddress] = useState('Main Street, 0012');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const convertPrice = (price) => {
    return (price * conversionRate.rate).toFixed(2); // Qiyməti mövcud valyutaya çevirir
  };
  return (
    <div className='container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-7xl'>
      {cart.products.length > 0 ? (
        <div className='space-y-8'>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-gray-900'>Your Shopping Cart</h1>
            <button 
              onClick={() => navigate(-1)}
              className='flex items-center text-blue-600 hover:text-blue-800 transition-colors'
            >
              <FaChevronLeft className='mr-1' />
              Continue Shopping
            </button>
          </div>

          <div className='flex flex-col lg:flex-row gap-8'>
            
            <div className='lg:w-2/3'>
              <div className='bg-white rounded-xl shadow-sm overflow-hidden'>
             
                <div className='hidden md:grid grid-cols-12 gap-4 bg-gray-50 p-4 border-b border-gray-200'>
                  <div className='col-span-5'>
                    <p className='text-sm font-medium text-gray-500 uppercase'>Product</p>
                  </div>
                  <div className='col-span-2 text-center'>
                    <p className='text-sm font-medium text-gray-500 uppercase'>Price</p>
                  </div>
                  <div className='col-span-3 text-center'>
                    <p className='text-sm font-medium text-gray-500 uppercase'>Quantity</p>
                  </div>
                  <div className='col-span-2 text-right'>
                    <p className='text-sm font-medium text-gray-500 uppercase'>Subtotal</p>
                  </div>
                </div>

                <div className='divide-y divide-gray-200'>
                  {cart.products.map((product) => (
                    <div key={product.id} className='grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center'>
                    
                      <div className='col-span-5 flex items-center space-x-4'>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className='w-20 h-20 object-contain rounded-lg bg-gray-100 p-2 border border-gray-200'
                        />
                        <div>
                          <h3 className='text-md font-medium text-gray-800'>{product.name}</h3>
                        </div>
                      </div>

                   
                      <div className='col-span-2 text-center'>
                        <p className='text-gray-700'>                          {conversionRate.symbol} {convertPrice(product.price)}
                        </p>
                      </div>

                      <div className='col-span-3 flex items-center justify-center'>
                        <div className='flex items-center border border-gray-300 rounded-md'>
                          <button 
                            className='px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors'
                            onClick={() => dispatch(decreaseQuantity(product.id))}
                          >
                            -
                          </button>
                          <span className='px-3 py-1 border-x border-gray-300'>{product.quantity}</span>
                          <button 
                            className='px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors'
                            onClick={() => dispatch(increaseQuantity(product.id))}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className='col-span-2 flex items-center justify-end space-x-4'>
                        <p className='text-gray-800 font-medium'> {conversionRate.symbol} {(product.quantity * convertPrice(product.price)).toFixed(2)}</p>
                        <button 
                          className='text-gray-400 hover:text-red-500 transition-colors'
                          onClick={() => dispatch(removeFromCart(product.id))}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

       
            <div className='lg:w-1/3'>
              <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-6'>Order Summary</h3>
                
                <div className='space-y-4'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Total Items:</span>
                    <span className='font-medium'>{cart.totalQuantity}</span>
                  </div>
                  
                  <div className='border-t border-gray-200 pt-4'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <p className='text-gray-600'>Shipping to:</p>
                        <p className='text-sm font-medium mt-1'>{address}</p>
                      </div>
                      <button 
                        className='text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors'
                        onClick={() => setIsModelOpen(true)}
                      >
                        Change
                      </button>
                    </div>
                  </div>
                  
                  <div className='border-t border-gray-200 pt-4'>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Subtotal:</span>
                      <span className='font-medium'> {conversionRate.symbol} {convertPrice(cart.totalPrice)}</span>
                    </div>
                    <div className='flex justify-between mt-1'>
                      <span className='text-gray-600'>Shipping:</span>
                      <span className='font-medium'>Free</span>
                    </div>
                  </div>
                  
                  <div className='border-t border-gray-200 pt-4'>
                    <div className='flex justify-between'>
                      <span className='text-lg font-semibold'>Total:</span>
                      <span className='text-lg font-bold text-gray-900'> {conversionRate.symbol} {convertPrice(cart.totalPrice)}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium mt-6 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>

        
          <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
          </Modal>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center py-12'>
          <img src={EmptyCart} alt="Empty cart" className='h-64 w-64 object-contain' />
          <h2 className='text-2xl font-bold text-gray-800 mt-6'>Your cart is empty</h2>
          <p className='text-gray-600 mt-2 mb-8'>Looks like you haven't added any items yet</p>
          <button 
            onClick={() => navigate('/')}
            className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors'
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;