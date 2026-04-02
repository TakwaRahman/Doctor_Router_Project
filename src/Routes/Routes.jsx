import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root'
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import MyBookings from '../pages/MyBookings/MyBookings';
import Blogs from '../pages/Blogs/Blogs';
import Contact from '../pages/Contact/Contact';


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('doctors.json').then(res => res.json()),
                Component: Home
            },
            {
                path: '/My-Booking',
                Component: MyBookings
            },
            {
                path: '/blogs',
                Component: Blogs
            },
            {
                path: '/contact',
                Component: Contact
            },

        ]
    }
])
