import React from 'react';
import ManCategory from '../assets/images/men.jpg';
import WomanCategory from '../assets/images/women.jpg';
import KidCategory from '../assets/images/kid.jpg';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const CategorySection = () => {
    const navigate = useNavigate();
    const categories = [
        {
            title: 'Men',
            imageUrl: ManCategory,
            description: 'Trending styles for men',
            category: 'men'
        },
        {
            title: 'Women',
            imageUrl: WomanCategory,
            description: 'Latest fashion for women',
            category: 'women'
        },
        {
            title: 'Kids',
            imageUrl: KidCategory,
            description: 'Adorable outfits for kids',
            category: 'kids'
        }
    ];

    const handleShopNow = (category) => {
        navigate(`/shop?category=${category}`);
      };

    return (
        <section id="categ" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
                <p className="mt-2 text-lg text-gray-600">Discover our curated collections</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <div 
                        key={index} 
                        className="group relative h-80 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                        <img 
                            src={category.imageUrl} 
                            alt={category.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                            <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                            <p className="text-gray-200 mb-4">{category.description}</p>
                            <button 
                                className="flex items-center text-white font-medium group-hover:underline cursor-pointer"
                                onClick={() => handleShopNow(category.category)}
                            >
                                Shop Now <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;