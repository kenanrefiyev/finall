import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({ setOrder }) => {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(false)
    const [paymentToggle, setPaymentToggle] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('cod')
    const [shippinhInfo, setShippinInfo] = useState({
        address: '',
        city: '',
        zip: ''
    })
    const [phone, setPhone] = useState('+994')

    const cart = useSelector((state) => state.cart)
    const navigate = useNavigate()
    
    const handleOrder = () => {
        const newOrder = {
            products: cart.products,
            orderNumber: '12345',
            shippingInformation: shippinhInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-6 lg:px-8 max-w-7xl'>
            <h3 className='text-3xl font-bold mb-8 text-gray-800'>Checkout</h3>
            
            <div className='flex flex-col lg:flex-row gap-8'>
               
                <div className='lg:w-2/3 space-y-6'>
               
                    <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
                        <div 
                            className='flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors'
                            onClick={() => setBillingToggle(!billingToggle)}
                        >
                            <h3 className='text-xl font-semibold text-gray-800'>Billing Information</h3>
                            {billingToggle ? <FaAngleDown className='text-gray-500' /> : <FaAngleUp className='text-gray-500' />}
                        </div>
                        
                        <div className={`px-6 pb-6 space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    placeholder='Enter your full name' 
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                                <input 
                                    type="email"
                                    id="email"
                                    placeholder='Enter your email address'
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-1'>Phone</label>
                                <input 
                                    type="text"
                                    id="phone"
                                    placeholder='Enter phone number'
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                                    value={phone}
                                    required
                                    maxLength={13}
                                    onChange={(e) => {
                                        let value = e.target.value.replace(/\D/g, "");
                                        if (!value.startsWith("994")) {
                                            value = "994" + value;
                                        }
                                        if (value.length > 12) {
                                            value = value.slice(0, 12);
                                        }
                                        setPhone("+" + value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
                        <div 
                            className='flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors'
                            onClick={() => setShippingToggle(!shippingToggle)}
                        >
                            <h3 className='text-xl font-semibold text-gray-800'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown className='text-gray-500' /> : <FaAngleUp className='text-gray-500' />}
                        </div>
                        
                        <div className={`px-6 pb-6 space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label htmlFor="address" className='block text-sm font-medium text-gray-700 mb-1'>Address</label>
                                <input 
                                    type="text" 
                                    id="address"
                                    placeholder='Enter your street address' 
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                                    onChange={(e) => setShippinInfo({ ...shippinhInfo, address: e.target.value })}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="city" className='block text-sm font-medium text-gray-700 mb-1'>City</label>
                                <input 
                                    type="text"
                                    id="city"
                                    placeholder='Enter your city'
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                                    onChange={(e) => setShippinInfo({ ...shippinhInfo, city: e.target.value })}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="zip" className='block text-sm font-medium text-gray-700 mb-1'>Zip Code</label>
                                <input 
                                    type="text"
                                    id="zip"
                                    placeholder='Enter your postal code'
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                                    onChange={(e) => setShippinInfo({ ...shippinhInfo, zip: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    
                 
                    <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
                        <div 
                            className='flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors'
                            onClick={() => setPaymentToggle(!paymentToggle)}
                        >
                            <h3 className='text-xl font-semibold text-gray-800'>Payment Method</h3>
                            {paymentToggle ? <FaAngleDown className='text-gray-500' /> : <FaAngleUp className='text-gray-500' />}
                        </div>
                        
                        <div className={`px-6 pb-6 space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center'>
                                <input 
                                    type="radio" 
                                    id="cod"
                                    name="payment" 
                                    className='h-5 w-5 text-blue-600 focus:ring-blue-500'
                                    checked={paymentMethod === 'cod'}
                                    onChange={() => setPaymentMethod('cod')} 
                                />
                                <label htmlFor="cod" className='ml-3 block text-sm font-medium text-gray-700'>
                                    Cash on Delivery
                                </label>
                            </div>
                            
                            <div className='flex items-center'>
                                <input 
                                    type="radio" 
                                    id="dc"
                                    name="payment" 
                                    className='h-5 w-5 text-blue-600 focus:ring-blue-500'
                                    checked={paymentMethod === 'dc'}
                                    onChange={() => setPaymentMethod('dc')} 
                                />
                                <label htmlFor="dc" className='ml-3 block text-sm font-medium text-gray-700'>
                                    Debit Card
                                </label>
                            </div>
                            
                            {paymentMethod === 'dc' && (
                                <div className='bg-gray-50 p-6 rounded-lg mt-4 space-y-4'>
                                    <h3 className='text-lg font-semibold text-gray-800'>Debit Card Information</h3>
                                    
                                    <div>
                                        <label htmlFor="cardNumber" className='block text-sm font-medium text-gray-700 mb-1'>Card number</label>
                                        <input
                                            type="text" 
                                            id="cardNumber"
                                            placeholder='1234 5678 9012 3456' 
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                                            maxLength={16}
                                            required
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/\D/g, "");
                                                e.target.value = value
                                            }} 
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="cardName" className='block text-sm font-medium text-gray-700 mb-1'>Card Holder Name</label>
                                        <input 
                                            type="text" 
                                            id="cardName"
                                            placeholder='Name on card' 
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                                            required 
                                        />
                                    </div>
                                    
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div>
                                            <label htmlFor="expiry" className='block text-sm font-medium text-gray-700 mb-1'>Expiry Date</label>
                                            <input 
                                                type="text"
                                                id="expiry"
                                                placeholder='MM/YY'
                                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                                                required
                                                maxLength={5}
                                                onChange={(e) => {
                                                    let value = e.target.value.replace(/\D/g, "");
                                                    if (value.length > 4) value = value.slice(0, 4);
                                                    
                                                    if (value.length >= 2) {
                                                        let month = value.slice(0, 2);
                                                        let year = value.slice(2, 4);
                                                        
                                                        if (parseInt(month) > 12) month = "12";
                                                        value = month + (year ? "/" + year : "");
                                                    }
                                                    e.target.value = value;
                                                }} 
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="cvv" className='block text-sm font-medium text-gray-700 mb-1'>CVV</label>
                                            <input 
                                                type="text"
                                                id="cvv"
                                                placeholder='123'
                                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                                                required
                                                maxLength={3}
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/g, "");
                                                    e.target.value = value;
                                                }} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
            
                <div className='lg:w-1/3'>
                    <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-6'>Order Summary</h3>
                        
                        <div className='space-y-4 max-h-96 overflow-y-auto pr-2'>
                            {cart.products.map(product => (
                                <div key={product.id} className='flex justify-between items-start pb-4 border-b border-gray-100'>
                                    <div className='flex items-start space-x-4'>
                                        <img 
                                            src={product.image} 
                                            alt={product.name} 
                                            className='w-16 h-16 object-contain rounded-lg bg-gray-50 p-1 border border-gray-200' 
                                        />
                                        <div>
                                            <h4 className='text-sm font-medium text-gray-800 line-clamp-2'>{product.name}</h4>
                                            <p className='text-xs text-gray-500 mt-1'>
                                                ${product.price} × {product.quantity}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='text-sm font-medium text-gray-800'>
                                        ${(product.price * product.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className='mt-6 pt-4 border-t border-gray-200 space-y-3'>
                            <div className='flex justify-between text-gray-600'>
                                <span>Subtotal</span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <div className='flex justify-between text-gray-600'>
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className='flex justify-between text-lg font-semibold text-gray-800 pt-2'>
                                <span>Total</span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        
                        <button 
                            className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium mt-6 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                            onClick={handleOrder}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout