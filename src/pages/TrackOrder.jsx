import { useState } from 'react';

const TrackOrder = ({ cartItems = [] }) => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setOrderStatus(null);
    
    setTimeout(() => {
      if (orderId && email) {
        setOrderStatus({
          id: orderId,
          status: 'Shipped',
          estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          items: cartItems.map(item => ({
            name: item.name,
            quantity: item.quantity || 1,
            price: item.price
          })),
          shippingAddress: '123 Main St, Apt 4B, New York, NY 10001',
          carrier: 'FedEx',
          trackingNumber: 'TRK' + Math.floor(1000000000 + Math.random() * 9000000000).toString()
        });
      } else {
        setError('Please enter both order ID and email');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Track Your Order</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-1">
              Order ID
            </label>
            <input
              type="text"
              id="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. ORD-123456"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Tracking...' : 'Track Order'}
        </button>
      </form>

      {error && (
        <div className="p-4 mb-6 bg-red-50 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {orderStatus && (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Order #{orderStatus.id}</h3>
                <p className="text-sm text-gray-500">Placed on {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  orderStatus.status === 'Shipped' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {orderStatus.status}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h4 className="text-md font-medium text-gray-900 mb-2">Estimated Delivery</h4>
              <p className="text-gray-600">{orderStatus.estimatedDelivery}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-md font-medium text-gray-900 mb-2">Shipping Information</h4>
              <p className="text-gray-600 mb-1">{orderStatus.shippingAddress}</p>
              <p className="text-gray-600">
                <span className="font-medium">Carrier:</span> {orderStatus.carrier} • 
                <span className="font-medium ml-2">Tracking #:</span> {orderStatus.trackingNumber}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;