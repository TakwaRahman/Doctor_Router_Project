
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import './NavBar.css'
import logo from '../../assets/logo.png';

const NavBar = () => {



    return (
        <div className='mx-20'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                    </div>
                    <a className="text-xl flex items-center gap-3"><img className='w-7' src={logo} alt="" /><span className='font-bold'>Phudu</span></a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/My-Booking'>My-Bookings</NavLink></li>
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink to='/contact'>Contact Us</NavLink></li>

                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btn bg-blue-500 text-white rounded-4xl p-5">Emergency</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;