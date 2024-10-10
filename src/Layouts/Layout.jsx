import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <div className='md:max-w-6xl mx-auto'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;