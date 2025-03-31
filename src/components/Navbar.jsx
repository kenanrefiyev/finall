import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchTerm } from '../redux/productSlice';
import Login from './Login';
import Register from './Register';
import Modal from './Modal';

const CreatexHomepage = () => {
  const products = useSelector(state => state.cart.products);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "https://s3-alpha-sig.figma.com/img/5ae2/26c1/af64d15832c9203ba037bfeb88019404?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GoH3vbKv~nEHNAVBEsu5AwFpfYHXUrzV4mKbRZaMwGlxMR2dExWFFpUuPxWpndWlxIIAxtYNWb8JFwAdSkhSZVlKOXuhFyUOAvDYuHJAa4LLeRYds4MKUyC7iCoQlbD02ojkPT~mJmG3lAZOZOcbDY48vEv3ivoSid7axTjxUYfIeLiOp1qQLXC6jk8Vcy5iaSfoOGJT~2YlLl1H17Ec2ilitzljcsHdkLg53tNeiRpsEDtGKKJ9a3BdH1xSQ1g8Jht3dYiCtK-ypivaN8fjMET6zyYFaB7bRbPJXfksdEzCffg8oPWRd5HNNRZcIDFoBko37iQrYKqcrua3X7nTLA__",
      title: "Menswear 2020",
      tag: "New Collection"
    },
    {
      id: 2,
      image: "https://www.russh.com/wp-content/uploads/2020/11/the-inspired-co-katriena.jpg",
      title: "Summer Collection",
      tag: "Trending Now"
    },
    {
      id: 3,
      image: "https://th.bing.com/th/id/OIP.k1Vf_gTQIPykqDXEc_edlQHaE7?rs=1&pid=ImgDetMain",
      title: "Autumn Essentials",
      tag: "Just Arrived"
    },
    {
      id: 4,
      image: "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2019/11/Uniqlo-winter-wear-in-singapore.jpg",
      title: "Winter Specials",
      tag: "Limited Edition"
    }
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };



  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate('/filter-data');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };


  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <nav className="bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <span className="text-gray-500">Available 24/7 | (405)555-0128</span>
            <a href="" className="text-gray-500 hover:text-gray-700">Delivery & returns</a>
            <a href="" className="text-gray-500 hover:text-gray-700">Track order</a>
            <a href=""  className="text-gray-500 hover:text-gray-700"
            onClick={(e) => {
              e.preventDefault(); 
              document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
           }}>Blog</a>
            <a href="" className="text-gray-500 hover:text-gray-700"
            onClick={(e) => {
              e.preventDefault(); 
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
           }}>Contacts</a>
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <div className="flex items-center">
              <img src="https://img.freepik.com/premium-vector/usa-flag-simple-illustration-independence-day-election_599062-7388.jpg" alt="Flag" className="w-6 h-4 mr-2" />
              <select className="text-gray-700">
                <option>Eng / $</option>
                <option>Aze/ ₼</option>
              </select>
            </div>
            <a className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => setIsModelOpen(true)}>Log in / Register</a>
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
      </nav>
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800"  
             >CREATEX</h1>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-6 mt-2 md:mt-0">
            <a href="#" className="text-gray-700 hover:text-gray-900"
            onClick={(e) => {
              e.preventDefault(); 
              document.getElementById("categ")?.scrollIntoView({ behavior: "smooth" });
           }}>Women</a>
            <a href="#" className="text-gray-700 hover:text-gray-900"
            onClick={(e) => {
              e.preventDefault(); 
              document.getElementById("categ")?.scrollIntoView({ behavior: "smooth" });
           }}>Men</a>
            <a href="#" className="text-gray-700 hover:text-gray-900"
            onClick={(e) => {
              e.preventDefault(); 
              document.getElementById("categ")?.scrollIntoView({ behavior: "smooth" });
           }}>Girls</a>
            <a href="#" className="text-gray-700 hover:text-gray-900"
            onClick={(e) => {
              e.preventDefault(); 
              document.getElementById("categ")?.scrollIntoView({ behavior: "smooth" });
           }}>Boys</a>
            <a href="#" className="text-red-500 hover:text-red-600" onClick={(e) => {
      e.preventDefault(); 
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
   }}
            >Sale</a>
          </nav>
          <form onSubmit={handleSearch} className="flex mt-2 md:mt-0 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search for products..."
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full md:w-auto"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    
      <div className="relative bg-orange-50 w-full  py-12 md:py-38">
        <div className="flex items-center w-full h-full p-4 md:p-10">
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-6 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100 focus:outline-none"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-800" />
          </button>


          <div className="flex flex-col md:flex-row items-center w-full">

            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left px-4 md:px-8">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                {slides[currentSlide].tag}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                {slides[currentSlide].title}
              </h2>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <button className="bg-white text-gray-800 px-4 py-2 rounded border border-gray-200 hover:bg-gray-100 transition">
                  Shop sale
                </button>
                <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
                  Shop the menswear
                </button>
              </div>

              <div className="flex space-x-2 justify-center md:justify-start pt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition ${currentSlide === index
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>


            <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="rounded-lg object-contain w-full h-auto max-h-96 shadow-lg"
              />
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-6 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100 focus:outline-none"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
      </Modal>
    </div>
  );
};

export default CreatexHomepage;
