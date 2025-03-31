import React, { useEffect, useState } from 'react';
import { FaCarSide, FaQuestion, FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const { id } = useParams();
    const products = useSelector(state => state.product.products);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length > 0) {
            const newProduct = products.find(product => product.id === Number(id));
            setProduct(newProduct);
        }
    }, [id, products]);

    const handleAddToCart = () => {
        if (!product) return;
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        };
        
        
        for (let i = 0; i < quantity; i++) {
            dispatch(addToCart(cartItem));
        }
        toast.success(`${quantity} ${product.name} added to cart!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        
        setQuantity(1);
    };

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1);
        setQuantity(value);
    };

    if (!product) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-pulse text-xl text-gray-600">Loading product details...</div>
        </div>
    );

    return (
        <div className='container mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-7xl'>
            <div className='flex flex-col lg:flex-row gap-12'>
                
                <div className='lg:w-1/2 bg-white rounded-xl shadow-sm overflow-hidden flex items-center justify-center p-8 h-96'>
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-h-full object-contain transition-transform hover:scale-105 duration-300" 
                    />
                </div>

                <div className='lg:w-1/2 bg-white rounded-xl shadow-sm p-8'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-2'>{product.name}</h2>
                    
                    <div className='flex items-center mb-6'>
                        <span className='text-2xl font-semibold text-blue-600'>${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                            <span className='ml-2 text-lg text-gray-500 line-through'>${product.originalPrice.toFixed(2)}</span>
                        )}
                    </div>

                    <div className='mb-8'>
                        <p className='text-gray-700'>{product.shortDescription || 'Premium quality product with excellent features.'}</p>
                    </div>

                    <div className='flex items-center mb-8 gap-4'>
                        <div className='flex items-center border border-gray-300 rounded-lg overflow-hidden'>
                            <button 
                                className='px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors'
                                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                            >
                                -
                            </button>
                            <input 
                                type="number"
                                id='quantity'
                                min='1'
                                value={quantity}
                                onChange={handleQuantityChange}
                                className='w-16 px-2 py-2 text-center border-0 focus:ring-2 focus:ring-blue-500 outline-none' 
                            />
                            <button 
                                className='px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors'
                                onClick={() => setQuantity(prev => prev + 1)}
                            >
                                +
                            </button>
                        </div>
                        <button 
                            className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2'
                            onClick={handleAddToCart}
                        >
                            <FaShoppingCart />
                            Add to Cart
                        </button>
                    </div>

                    <div className='space-y-4 border-t border-gray-200 pt-6'>
                        <div className='flex items-center text-gray-700 hover:text-blue-600 transition-colors cursor-pointer'>
                            <FaCarSide className='mr-3 text-lg' />
                            <div>
                                <h4 className='font-medium'>Free Delivery</h4>
                                <p className='text-sm text-gray-500'>Estimated delivery in 3-5 business days</p>
                            </div>
                        </div>
                        <div className='flex items-center text-gray-700 hover:text-blue-600 transition-colors cursor-pointer'>
                            <FaQuestion className='mr-3 text-lg' />
                            <div>
                                <h4 className='font-medium'>Have Questions?</h4>
                                <p className='text-sm text-gray-500'>Contact our customer support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    
            <div className='mt-16 bg-white rounded-xl shadow-sm p-8'>
                <h3 className='text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200'>Product Details</h3>
                <div className='prose max-w-none'>
                    {product.description || (
                        <p className='text-gray-700'>
                            This premium product features high-quality materials and exceptional craftsmanship. 
                            Designed for durability and performance, it offers excellent value for money. 
                            The product comes with a manufacturer's warranty and is backed by our satisfaction guarantee.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Details;