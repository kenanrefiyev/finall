import React from 'react';
import { useLocation } from 'react-router-dom';
import { mockData } from '../assets/Data';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'; // Yönləndirmə üçün hook

const Shop = () => {
  const navigate = useNavigate(); // Yönləndirmə üçün hook

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Məhsul səhifəsinə yönləndirir
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category'); 

  const filteredProducts = category 
    ? mockData.filter((product) => product.category === category)
    : mockData;

  const { currentCurrency, conversionRates } = useSelector(state => state.currency);
  const dispatch = useDispatch();

  const convertPrice = (price) => {
    const rate = conversionRates[currentCurrency].rate;
    const symbol = conversionRates[currentCurrency].symbol;
    return `${symbol}${(price * rate).toFixed(2)}`;
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
     toast.success(`${product.name} added to cart!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center sm:text-left">
    {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products'}
  </h1>
  
  {filteredProducts.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <div 
          key={product.id} 
          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          onClick={() => handleProductClick(product.id)}
        >
          <div className="relative aspect-square w-full overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            {/* Quick add to cart for mobile */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className="md:hidden absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h2>
                <p className="text-gray-600 font-medium mt-1">{convertPrice(product.price)}</p>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">
                {product.category}
              </span>
              
              {/* Modern add to cart button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
                className="hidden md:flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-full transition-all duration-300 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900">No products found</h3>
        <p className="mt-2 text-gray-500">We couldn't find any products in this category.</p>
        <button 
          onClick={() => window.history.back()} 
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to shop
        </button>
      </div>
    </div>
  )}
</div>
  );
};

export default Shop;