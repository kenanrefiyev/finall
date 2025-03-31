import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">HELP</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Delivery & returns</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-300">Track order</a></li>
            <li><a href="#" className="hover:text-gray-300">Contacts</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">SHOP</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">New arrivals</a></li>
            <li><a href="#" className="hover:text-gray-300">Trending now</a></li>
            <li><a href="#" className="hover:text-gray-300">Sales</a></li>
            <li><a href="#" className="hover:text-gray-300">Brands</a></li>
          </ul>
        </div>
        <div>
          <h4  id="contact" className="text-lg font-semibold mb-4">GET IN TOUCH</h4>
          <ul className="space-y-2">
            <li>Call: (405) 555-0128</li>
            <li> <a href="mailto:hello@createx.com">Email: hello@createx.com</a></li>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/" target='_blank' className="hover:text-blue-500"><FaFacebook size={24} /></a>
              <a href="https://x.com/" target='_blank' className="hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="https://www.instagram.com/" target='_blank' className="hover:text-pink-500"><FaInstagram size={24} /></a>
              <a href="https://www.youtube.com/" target='_blank' className="hover:text-red-500"><FaYoutube size={24} /></a>
              <a href="https://www.bing.com/search?q=linkedin+murad+orucov&cvid=c6610fad02c64739b257da8c165c99cf&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIICAEQ6QcY_FXSAQg1NDM5ajBqNKgCALACAA&FORM=ANAB01&ucpdpc=UCPD&PC=EDGEDSE"  target='_blank' className="hover:text-blue-600"><FaLinkedin size={24} /></a>
            </div>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">DOWNLOAD OUR APP</h4>
          <div className="flex space-x-4">
            <a href="https://play.google.com/store" target='_blank' className="bg-white rounded-lg p-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" alt="App Store" className="h-10" />
            </a>
            <a href="https://apps.apple.com" target='_blank' className="bg-white rounded-lg p-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="Google Play" className="h-10" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 container mx-auto px-4 flex justify-between items-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} All rights reserved. Made with ❤️ by Createx Studio
        </p>
        <button 
          onClick={scrollToTop} 
          className="flex items-center text-white hover:text-gray-300 transition-colors duration-300"
        >
          <span className="mr-2">Go to top</span>
          <FaArrowUp size={20} />
        </button>
      </div>
    </footer>
  )
}

export default Footer