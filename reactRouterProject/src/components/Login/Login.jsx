import React from 'react'
import { useState } from 'react'

function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Email:', email);
        console.log('Password:', password);
    };


  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 ">
        <h1 className="text-3xl font-bold mb-5 text-orange-600">Login</h1>
      <form className="bg-white py-5 px-10 rounded-lg shadow-md w-full max-w-sm " onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-bold mb-4">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-bold mb-4">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
          />
        </div>
        <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
