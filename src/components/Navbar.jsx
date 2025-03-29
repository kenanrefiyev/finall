import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchTerm } from '../redux/productSlice';
import Login from './Login';
import Register from './Register';
import Modal from './Modal';




const CreatexHomepage = () => {
  const products = useSelector(state => state.cart.products);
  const navigate = useNavigate();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const openSignUp = () => {
    setIsLogin(false)
    setIsModelOpen(true)
  }
  const openLogin = () => {
    setIsLogin(true)
    setIsModelOpen(true)
  }


  const [search, setSearch] = useState('');
  const dispatch = useDispatch()
  

  const handleSearch =(e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate ('/filter-data')
  }
  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <nav className="bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-gray-500">Available 24/7 | (405)555-0128</span>
            <a href="" className="text-gray-500 hover:text-gray-700">Delivery & returns</a>
            <a href="" className="text-gray-500 hover:text-gray-700">Track order</a>
            <a href="" className="text-gray-500 hover:text-gray-700">Blog</a>
            <a href="" className="text-gray-500 hover:text-gray-700">Contacts</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img src="https://img.freepik.com/premium-vector/usa-flag-simple-illustration-independence-day-election_599062-7388.jpg" alt="Flag" className="w-6 h-4 mr-2" />
              <select className="text-gray-700">
                <option>Eng / $</option>
                <option >Aze/ ₼</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <a className="text-gray-500 hover:text-gray-700" onClick={() => setIsModelOpen(true)}>Log in / Register</a>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <FaShoppingCart className="text-gray-500 hover:text-gray-700 cursor-pointer" size={20} onClick={handleCartClick} />
                  {products.length > 0 && (
                    <span className='absolute -top-2 -right-2 text-white bg-red-600 text-xs rounded-full w-4 h-5 flex items-center justify-center'>
                      {products.length}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">CREATEX</h1>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Women</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Men</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Girls</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Boys</a>
            <a href="#" className="text-red-500 hover:text-red-600">Sale</a>
          </nav>
          <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text" 
              placeholder="Search for products... " 
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              
              onChange={(e) => setSearch(e.target.value)}/>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 relative">
        <div className="bg-[#F4E4D4] rounded-lg overflow-hidden flex items-center">
          <button className="absolute left-8 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
            <FaChevronLeft className="text-gray-700" size={24} />
          </button>
          <button className="absolute right-8 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
            <FaChevronRight className="text-gray-700" size={24} />
          </button>
          <div className="w-1/2 pl-16 z-0">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">New Collection</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4">Menswear 2020</h2>
            <div className="mt-6 space-x-4">
              <button className="bg-white text-gray-800 px-6 py-3 rounded-md hover:bg-gray-100 border">Shop sale</button>
              <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700">Shop the menswear</button>
            </div>
            <div className="mt-8 flex space-x-4">
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-2">01</span>
                <div className="w-16 h-1 bg-gray-300"></div>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-100 text-gray-500 rounded-full px-2 py-1 text-sm mr-2">02</span>
                <div className="w-16 h-1 bg-gray-300"></div>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-100 text-gray-500 rounded-full px-2 py-1 text-sm mr-2">03</span>
                <div className="w-16 h-1 bg-gray-300"></div>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-100 text-gray-500 rounded-full px-2 py-1 text-sm mr-2">04</span>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img 
              src="https://s3-alpha-sig.figma.com/img/5ae2/26c1/af64d15832c9203ba037bfeb88019404?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LXBwgBW67-9kz726xwKOLyK~EbTdDZjA2uxjLHuX9Y0q92RVvrILAbK9J9Vc~qUIq~5SAqbXB5CNNeaPYupRp1uOu2MNe~X8FXbaxlSVVHqrvOIhk-9p8k9rR~bIxYrJ85RzY-scKtUrADY-wyB9-N1GTqtXb17x6sr2cjgWWRDycfGGhm8KdMDe4eu~umIKD8s~vBo5LX3ccEfNFijBLZqb1qxxCEP9axeRJ~XIOrK2n1kDp1ey1kxVkgGmtVtrqHA0~45oU~mPfC0BgimXdeWxgTjfOdtQtRPwqcRK33dfFYU52ZeTHM~rbLFZVl8zcqSDyju3UAAavNbJRN6OEQ__" 
              alt="" 
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
      <Modal  isModelOpen ={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
      </Modal>
    </div>
  );
};

export default CreatexHomepage;
