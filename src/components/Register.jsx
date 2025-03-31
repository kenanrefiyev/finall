import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Sing Up</h2>
        <form>
            <div className='mb-4'>
                <label className='block text-gray-700'>Name</label>
                <input type="text" placeholder='Enter name'  className='w-full px-3 py-2 border'/>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>Password</label>
                <input type="text" placeholder='Enter password' className='w-full px-3 py-2 border'/>
            </div>
            <div className='mb-4'>
                <button type='submit' className='w-full bg-red-600 text-white py-2'>Sing Up</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Already have an account? <br></br></span>
            <button className='text-red-800' onClick={openLogin}>Login</button>
        </div>
    </div>
  )
}

export default Register