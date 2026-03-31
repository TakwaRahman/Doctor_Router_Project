import React from 'react';
import BannerImg from '../../assets/banner-img-1.png'

const Banner = () => {
    return (
        <div>
            <div className='text-center mt-5 border-5 mx-20 py-15 bg-gray-100 rounded-3xl border-white'>
                <h1 className='text-5xl font-bold mb-7'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                <p className='px-55'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>


                <div className='text-center mt-5'>
                    <input className='bg-white mx-auto py-3 pr-90 pl-5 rounded-4xl' type="text" placeholder='Search any doctor...' />
                    <button className="btn bg-blue-500 text-white rounded-4xl p-5 ml-5">Search Now</button>
                </div>


                <div className='flex justify-center gap-5 mt-5'>
                    <img className='' src={BannerImg} alt="" />
                    <img className='' src={BannerImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;