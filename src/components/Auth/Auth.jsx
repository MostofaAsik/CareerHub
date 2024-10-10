import React, { useState } from 'react';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SingIn/SignIn';
import './Auth.css';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div
            className={`flex h-screen items-start pt-10 justify-center transition-colors duration-500 ${isSignUp ? 'bg-signup-wave' : 'bg-signin-wave'
                }`}
        >
            <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 space-y-4 shadow-2xl bg-white rounded-lg">
                {/* Toggle Button */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
                        {isSignUp ? 'Join Us Now!' : 'Welcome Back!'}
                    </h2>
                    <div
                        className="relative w-12 h-6 bg-gray-300 rounded-full cursor-pointer"
                        onClick={toggleForm}
                    >
                        <div
                            className={`absolute w-6 h-6 bg-blue-500 rounded-full shadow-md transition-transform transform ${isSignUp ? 'translate-x-6' : 'translate-x-0'
                                }`}
                        />
                    </div>
                </div>


                {isSignUp ? <SignUp /> : <SignIn />}
            </div>
        </div>
    );
};

export default Auth;
