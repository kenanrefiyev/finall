import React, { useState } from 'react';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');

    if (isChecked && email) {
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, category: selectedCategory }),
        });

        if (response.ok) {
          alert('Subscription successful!');
          setEmail('');
          setIsChecked(false);
          setSelectedCategory('');
        } else {
          alert('Something went wrong.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 w-full pr-0 md:pr-12">
        <h2 className="text-4xl font-bold mb-4">Subscribe for updates</h2>
        <p className="text-gray-600 mb-8">
          Subscribe for exclusive early sale access and new arrivals.
        </p>
        <div className="flex space-x-4 mb-6">
          {['Women', 'Men', 'Girls', 'Boys'].map((category) => (
            <button 
              key={category} 
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            placeholder="Your working email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button 
            type="submit" 
            className={`w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition-colors ${
              (!isChecked || !email || !selectedCategory) && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!isChecked || !email || !selectedCategory}
          >
            Subscribe
          </button>
          
          <div className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              id="agree" 
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="form-checkbox text-teal-600 rounded"
            />
            <label htmlFor="agree" className="text-gray-600">
              I agree to receive communications from Createx Store.
            </label>
          </div>
        </form>
      </div>
      <div className="md:w-1/2 w-full mt-8 md:mt-0 relative">
        <div className="absolute inset-0 bg-pink-100/50 rounded-lg -rotate-6"></div>
        <div className="relative z-10">
          <img 
            src="https://s3-alpha-sig.figma.com/img/3acc/02a7/b43e246d82477bffa041130495b81ab4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y8BktO7y8DIMvndPmDXRJ6TTRBKOUEJG3CnLt3Md6t8p2t69vYyQJiC5JcA3vz4tpFI8hZBY-nbENCIoeeE-qYd52QyeBkQo87ukjo1Iar~i1iOOhR4nJZRXiKi646TL8mPOYmJ4yLHxh~KUSnougDS5g~6SxVWxRFlVnLYmOUPyFiBNfKkxehrhA~2z2LGL-9o3I-6VcXhrWy4kWXS9~E9VIfG5HRZm8iAbTcaogu5wqS2cDi5qUspddrCbNELJLs1aK~WS3qcn~w1veDBJZo7rZm~hPiYRNKf2H5bk~WmLVAurWXb85c1LdV~V14ZhMfo4mwSXqGNydi3pCUyihg__" 
            alt="Subscription Illustration" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
