import React from 'react';

const SignUp = () => {
    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    placeholder="Enter your email"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    placeholder="Enter your password"
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 shadow-md"
            >
                Create Account
            </button>
        </form>
    );
};

export default SignUp;