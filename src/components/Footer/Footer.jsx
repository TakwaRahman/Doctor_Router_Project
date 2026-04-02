import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
    return (
        <div className='bg-white mt-15'>
            <div className='flex justify-center items-center gap-2 pt-20'>
                <img className='w-7' src={logo} alt="" />
                <h1 className='font-bold text-xl'>Phudu</h1>
            </div>

            <div className="navbar-center hidden lg:flex justify-center mt-5 border-b mx-90 pb-5 border-gray-400">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/My-Booking'>My-Bookings</NavLink></li>
                    <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                </ul>
            </div>

            <div className='flex justify-center mt-10 gap-5'>

                <a href="https://www.facebook.com/takwa.rahman2.0/" target="_blank">
                    <FaFacebook className='size-8' />
                </a>

                <a href="https://instagram.com" target="_blank">
                    <FaInstagram className='size-8' />
                </a>

                <a href="https://github.com" target="_blank">
                    <FaGithub className='size-8' />
                </a>

            </div>
        </div>
    );
};

export default Footer;