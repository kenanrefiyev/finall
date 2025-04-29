import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';





const Login = ({ openSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    if (validateForm()) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        console.log("Daxil olundu:", userCredential.user);
        navigate("/")
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Firebase error:", errorCode, errorMessage);
        setErrors((prev) => ({
          ...prev,
          password: "Email və ya şifrə yanlışdır",
        }));
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            value={formData.password}
            onChange={handleChange}
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <button
              type="button"
              className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
            >
              Forgot password?
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={openSignUp}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors focus:outline-none"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;