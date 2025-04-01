import React from 'react';
import { FaCalendar, FaClock, FaUser, FaChevronRight } from 'react-icons/fa';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Summer Fashion Trends: What's Hot This Season",
    excerpt: "Discover the latest summer fashion trends that are making waves this season. From vibrant colors to sustainable materials, we cover everything you need to refresh your wardrobe.",
    image: "https://s3-alpha-sig.figma.com/img/b5ef/6459/ad90694e5e71a84b37700b33d9cf6575?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=miB-0bcB~0U1lT38kracYX9bYkxW1AX9BxtUf9qoo~xgcD8WeIVQOGPSRNu9C1OugLpapqEFKxgviFOfLnWmOfGsa8irFEVtOD1zEoPSAOMzZsKSZhTZfzmWyvw9~nT-PepsgnHjrwjUGAxIgtbCo57LNPMGnfqFlJPn7Jixv-Mk52TSebeuASXzK3kcadCGE5rovruIvUcobhPrXqjQCfmTcEBP3q55LluPtQslD9W9Vjlb7BK6~SbvDz~5KgkB1HxUOaSR7KRLYjFJUO2oN6bzbLtD-Zj6PkqTjKdi30HH6nR1Bl4DGqUmFfb2lCUW2rlV~W4bgkL7jjYHV8ynVw__",
    category: "Fashion",
    author: "Emma Johnson",
    date: "March 25, 2025",
    readTime: "6 min read"
  };

  const recentPosts = [
    {
      id: 2,
      title: "10 Essential Skincare Products for Your Daily Routine",
      excerpt: "Building a skincare routine can be overwhelming. Here are our top picks for products that deliver results.",
      image: "https://s3-alpha-sig.figma.com/img/e06e/607c/ac37a7d5233b74c0f52fdb43e5feddf4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SqVFxscoUlWrC9Y2NRlUUB0JQxyN-Jx9MZ~LFLVqjugiY1dYDnesfzLWhcXqPP6NDmBW1-2m3ZPpVMlB6YC10679UKvNNwmuCH5I204IAaNo4O4HpmSS2I25oYMdngGw5vEwiwC48AqfM0~68fdzUi2mvwYGoUllxktXVQvGGduCouU3ORbgKSXO1MWkoTya18PvjFZl2tsrpAvI8BTN5v-3WwmA2AUl6e2uSgE4NFIzJ9mG5l9Iyzh1fVKeecztG39JBDFgRJ4ufQeDNok97TSIEE8wNA0h6gLx5L~Qsrms8rvdWxEeb6oO2Q13ArmmCrFXaBxHDUv-WosT2EET4Q__",
      category: "Beauty",
      author: "Sarah Miller",
      date: "March 20, 2025",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Sustainable Shopping: Eco-Friendly Brands You Should Know",
      excerpt: "Make your shopping habits more sustainable with these environmentally conscious brands that don't compromise on style.",
      image: "https://s3-alpha-sig.figma.com/img/46d7/9e4a/0aa7926ca0515b91c9f48102c4448d78?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oZBZMSwLka0LBJyrx5sWF3O0Xak91UN5uICvthNMys1aozHqgvvH8iZ-hj6I5LoMnouDlwRVIhy4DO4AoKXD15dvB4yk6dkWsITJv0Anuhz3peLnOt990d-YbIk4nT6FbkHIamAnX1plyARj4j8FwJPC1vDmn10swgMIRSnBHEwbwzjFLj1xc~B7TekPeuNi1RWbzxm9ziJ9vpWoqIaM0rhqg42jYNsG0P7JZDaNIsufGHzT-RSAJc7y~LCXZT6zmYG~TGya06A4e3yVz7mlHnommuiUXN5O1CgPntFSIth~akCjGRowGSCzh0PSLdgShw~mjG32IzZRR1xg0wiAKA__",
      category: "Sustainability",
      author: "Alex Chen",
      date: "March 18, 2025",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Home Office Essentials: Create a Productive Workspace",
      excerpt: "Transform your home office with these must-have items that blend functionality with style.",
      image: "https://s3-alpha-sig.figma.com/img/c2e9/20c8/df0044370405386909d110418ca26fc2?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DkORK4mv~2Zz~D6vHdFPEh2K4Jgfpb40hHE6zNZgj9b72oL2SekliLnZAq1yQV1o0CfgzqvcZb1guvliGCp3iYOaYcTA17JFhtd3XyutzIyg7ecK8sMvQ8WudDCbN-zR9ceXrn7agDiiOm4fdXDEI-Vsxe~z~pRhHwIzyhN5emrIrERsP3reA4KhPEqXXtNFEy4JpYngUKr9dIqN0SYhFfOT402Ej4zgwxudFqtdioL-laREfxemRGUdcXlMq2TcdkCR9fW6OpPpocTR7z8XF2JGPTSxFTxq~Sjrig97qei0QImTjMVwGpH61C1ozk~yzObfjeLfpo~i4kPkCAnwyA__",
      category: "Home Decor",
      author: "David Wilson",
      date: "March 15, 2025",
      readTime: "7 min read"
    }
  ];

  const popularCategories = [
    "Fashion", "Beauty", "Home Decor", "Electronics", 
    "Sustainability", "Accessories", "Lifestyle", "Fitness"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1  id="blog" className="text-3xl font-bold text-gray-900 mb-2">Our Blog</h1>
          <p className="text-lg text-gray-600">
            Discover the latest trends, tips, and inspiration for your shopping journey
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="h-64 w-full object-cover md:h-full" 
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="flex items-center mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{featuredPost.title}</h2>
              <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center mr-4">
                  <FaUser className="h-4 w-4 mr-1" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center mr-4">
                  <FaCalendar className="h-4 w-4 mr-1" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover" 
              />
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-3">
                    <FaCalendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Blog;
