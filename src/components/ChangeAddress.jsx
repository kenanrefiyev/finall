import React, { useState } from 'react'

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState('')

  const onClose = () => {
    if (newAddress.trim()) {
      setAddress(newAddress)
    }
    setIsModelOpen(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Change Delivery Address</h3>
      
      <input 
        type="text" 
        placeholder='Enter new address' 
        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition mb-6'
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
        autoFocus
      />
      
      <div className='flex justify-end space-x-3'>
        <button 
          className='px-5 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400'
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button 
          className={`px-5 py-2.5 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 ${
            newAddress.trim() 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-blue-400 cursor-not-allowed'
          }`}
          onClick={onClose}
          disabled={!newAddress.trim()}
        >
          Save Address
        </button>
      </div>
    </div>
  )
}

export default ChangeAddress