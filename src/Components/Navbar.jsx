import React from 'react';
import logo from "../assets/logo.png";

export const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full bg-gradient-to-r from-black from-10% via-blue via-70% to-black to-110% text-white flex px-10 gap-20 py-6 items-center justify-center z-50'>
            <div>
                <img src={logo} alt='Logo' className='h-12' /> 
            </div>
            <div>
                <ul className="flex gap-10 text-m">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#faqs">FAQs</a></li>
                </ul>
            </div>
            <div>
                <button className='border-2 border-custom-blue px-5 py-2 rounded-xl text-m'>
                    Book a call
                </button>
            </div>
        </nav>
    );
};
