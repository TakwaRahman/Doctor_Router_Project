import React from 'react';

import { FaRegRegistered } from "react-icons/fa6";
import DoctorDetails from '../DoctorDetails/DoctorDetails';
import { Link } from 'react-router-dom';

const Doctor = ({ singleDoctor }) => {

    const { image, experience, registrationNumber, speciality, education, id, name } = singleDoctor

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm p-5 rounded-2xl mt-10">
                <figure>
                    <img
                        className='h-100 w-90 rounded-2xl'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="pt-5">
                    <span className='badge bg-green-200 text-green-800 py-4 px-4 rounded-3xl font-semibold'>Available</span>
                    <span className='badge bg-blue-100 font-semibold rounded-3xl ml-3 py-4 px-4 text-[#176AE5]'>{experience}+ Years Experience</span>
                    <h2 className="card-title pt-3 font-bold text-xl">{name}</h2>
                    <p className='pt-2 text-gray-500'>{education}, {speciality}</p>
                    <p className='pt-5 flex items-center gap-3'><FaRegRegistered /> Reg No : {registrationNumber}</p>
                    <div className="card-actions justify-center pt-3">
                        <Link to={`/DoctorDetails/${id}`}><button className="btn px-32 rounded-4xl text-[#176AE5] border-2 hover:text-white hover:bg-[#176AE5] border-[#176AE5]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;