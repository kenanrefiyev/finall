import { useState } from 'react';

const DeliveryReturns = () => {
  const [activeTab, setActiveTab] = useState('delivery');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery & Returns Information</h2>
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('delivery')}
          className={`px-4 py-2 font-medium text-sm focus:outline-none ${
            activeTab === 'delivery'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Delivery Information
        </button>
        <button
          onClick={() => setActiveTab('returns')}
          className={`px-4 py-2 font-medium text-sm focus:outline-none ${
            activeTab === 'returns'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Returns Policy
        </button>
      </div>
      {activeTab === 'delivery' && (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Standard Delivery</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>3-5 business days</li>
              <li>Free on orders over $50</li>
              <li>$4.99 for orders under $50</li>
              <li>Delivered Monday to Friday, 9am-6pm</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Express Delivery</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>1-2 business days</li>
              <li>$9.99 flat rate</li>
              <li>Order before 2pm for same-day dispatch</li>
              <li>Delivered Monday to Saturday</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">International Delivery</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>5-10 business days depending on destination</li>
              <li>Shipping costs calculated at checkout</li>
              <li>Customs and import duties may apply</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tracking Your Order</h3>
            <p className="text-gray-700 mb-2">
              Once your order has been dispatched, you'll receive a tracking number via email.
            </p>
            <p className="text-gray-700">
              You can track your order using our <a href="/track-order" className="text-blue-600 hover:underline">Order Tracker</a>.
            </p>
          </div>
        </div>
      )}
      {activeTab === 'returns' && (
        <div className="space-y-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Easy Returns Policy</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>30-day return policy from delivery date</li>
              <li>Items must be unused, in original packaging with tags attached</li>
              <li>Free returns for faulty or incorrect items</li>
              <li>$5.99 return fee for change of mind (deducted from refund)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">How to Return</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Log in to your account and go to "Order History"</li>
              <li>Select the item(s) you wish to return</li>
              <li>Print the prepaid return label (if eligible)</li>
              <li>Package your return securely</li>
              <li>Drop off at your nearest post office or schedule a pickup</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Refund Processing</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Refunds processed within 3-5 business days of receiving return</li>
              <li>Original payment method will be credited</li>
              <li>Allow additional 2-3 days for bank processing</li>
              <li>Sale items are final and cannot be returned</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Exchanges</h3>
            <p className="text-gray-700 mb-2">
              We currently don't offer direct exchanges. Please return your item and place a new order.
            </p>
            <p className="text-gray-700">
              For faulty items, please contact our <a href="/contact" className="text-blue-600 hover:underline">customer service</a>.
            </p>
          </div>
        </div>
      )}
      <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-4 py-3 text-left font-medium bg-gray-50 hover:bg-gray-100 focus:outline-none"
              onClick={() => setActiveTab(activeTab === 'delivery' ? 'returns' : 'delivery')}
            >
              {activeTab === 'delivery' 
                ? 'View Returns Policy Questions →' 
                : 'View Delivery Information Questions →'}
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <a
              href="/contact"
              className="block w-full px-4 py-3 text-left font-medium bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              Contact Customer Service →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryReturns;