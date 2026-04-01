import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {


    const data = useLoaderData()

    const [showAll, setShowAll] = useState(false)

    const handleShow = () => {
        setShowAll(true)
    }

    const doctorsToShow = showAll ? data : data.slice(0, 6);



    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Our Best Doctors</h1>
                <p className='mt-5 px-75'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            <Suspense fallback={<h2>Loading......</h2>}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-40'>
                    {
                        doctorsToShow.map((singleDoctor) => <Doctor key={singleDoctor.id} singleDoctor={singleDoctor}></Doctor>)
                    }
                </div>
                {!showAll && (
                    <div className='flex justify-center items-center mt-10'>
                        <button onClick={handleShow} className="btn bg-blue-500 text-white rounded-4xl p-5 ml-5">View All Doctors</button>
                    </div>
                )}
            </Suspense>
        </div>
    );
};

export default Doctors;