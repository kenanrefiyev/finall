import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = ({ order }) => {
    const navigate = useNavigate()
    
    const handleTrackOrder = () => {
        
        navigate('/track-order', {
            state: {
                orderId: order.orderNumber,
                email: order.customerEmail 
            }
        })
    }
    
    return (
        <div className='container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-4xl'>
            <div className='text-center mb-8'>
                <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-10 h-10 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                    </svg>
                </div>
                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Thank you for your order!</h2>
                <p className='text-lg text-gray-600'>Your order has been placed successfully. You'll receive an email confirmation shortly.</p>
            </div>

            <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8'>
                <div className='p-6 border-b border-gray-200 bg-gray-50'>
                    <h3 className='text-xl font-semibold text-gray-800'>Order Summary</h3>
                </div>
                <div className='p-6'>
                    <div className='flex justify-between mb-4'>
                        <span className='text-gray-600'>Order Number:</span>
                        <span className='font-medium text-gray-800'>{order.orderNumber}</span>
                    </div>
                    
                    <div className='mb-6'>
                        <h4 className='text-lg font-semibold text-gray-800 mb-3'>Shipping Information</h4>
                        <div className='bg-gray-50 p-4 rounded-lg'>
                            <p className='text-gray-700'>{order.shippingInformation.address}</p>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-lg font-semibold text-gray-800 mb-3'>Items Ordered</h4>
                        <div className='space-y-4'>
                            {order.products.map(product => (
                                <div key={product.id} className='flex justify-between items-center py-2 border-b border-gray-100 last:border-0'>
                                    <div>
                                        <p className='font-medium text-gray-800'>{product.name}</p>
                                        <p className='text-sm text-gray-500'>Qty: {product.quantity}</p>
                                    </div>
                                    <p className='font-medium text-gray-800'>${(product.price * product.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className='p-6 border-t border-gray-200 bg-gray-50'>
                    <div className='flex justify-between items-center'>
                        <span className='text-lg font-medium text-gray-700'>Total Price:</span>
                        <span className='text-xl font-bold text-gray-900'>${order.totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-center gap-4 mt-8'>
                <button 
                    className='px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                    onClick={handleTrackOrder}
                >
                    Track Order
                </button>
                <button 
                    className='px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
                    onClick={() => navigate('/shop')}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    )
}

export default Order