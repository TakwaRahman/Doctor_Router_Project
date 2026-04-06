import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaRegRegistered } from "react-icons/fa6";
import { addToStoreDB } from '../utility/addToDB';
import { Toaster } from 'react-hot-toast';

const DoctorDetails = () => {

    const { id } = useParams()
    const data = useLoaderData()

    useEffect(() => {
        window.scrollTo(0, 200);
    }, [])


    const doctorId = parseInt(id)
    const singleDoctor = data.find(doctor => doctor.id === doctorId);

    console.log(singleDoctor)

    // console.log(singleDoctor)
    if (!singleDoctor) {
        return <p>Page Not Found</p>
    }

    const { image, name, education, speciality, consultationFee, experience, availability, registrationNumber, workingPlace } = singleDoctor



    const handleBookNowDoctor = (id) => {
        addToStoreDB(id)
    }



    return (
        <div className='px-30'>
            <div className='text-center bg-white p-20 mt-10 rounded-2xl'>
                <h1 className='text-4xl font-bold'>Doctor's Profile Details</h1>
                <p className='px-30 pt-5'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>

            <div className='bg-white mt-10 flex gap-5 rounded-2xl'>
                <div className='py-10 pl-10'>
                    <img className='h-100 w-90 rounded-xl' src={image} alt="" />
                </div>
                <div className='py-12'>
                    <h1 className='font-bold text-3xl pb-5'>{name}</h1>
                    <p>{education}</p>
                    <p className='pt-2'>{speciality}</p>
                    <p className='text-gray-400 pt-5'>Working At</p>
                    <p className='pt-2 font-bold'>{workingPlace}</p>
                    <p className='pt-10 flex items-center gap-3'><FaRegRegistered /> Reg No : {registrationNumber}</p>
                    <p className='pt-10'><span className='font-bold mr-3'>Availibility </span>
                        {
                            availability.map(available => <span className='badge badge-secondary mr-3 p-4 rounded-4xl'>{available}</span>)
                        }
                    </p>
                    <p className="pt-5 font-bold">Consultation Fee : <span className='text-[#176AE5] font-semibold'>{consultationFee}  (incl. Vat) Per consultation</span></p>
                </div>
            </div>


            <div className='mt-10 border p-10 bg-white rounded-2xl border-none'>
                <h1 className='text-2xl font-bold text-center pb-5'>Book an Appointment</h1>
                <div className='flex justify-between pt-5 items-center border-y border-dashed pb-5'>
                    <h4 className='font-bold'>Availability</h4>
                    <h4 className='font-semibold badge bg-green-200 p-5 rounded-full text-green-600'>Doctor Available Today</h4>
                </div>
                <div className='text-center mt-10'>
                    <button onClick={() => handleBookNowDoctor(id)} className="btn text-white bg-[#176AE5] rounded-full w-full">Book Appointment Now</button>
                </div>
            </div>


            

        </div>
    );
};

export default DoctorDetails;