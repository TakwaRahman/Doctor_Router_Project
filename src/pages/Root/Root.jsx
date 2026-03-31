import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../../components/Header/NavBar'
import Footer from '../../components/Footer/Footer'

const Root = () => {
    return (
        <div className='bg-gray-200'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;