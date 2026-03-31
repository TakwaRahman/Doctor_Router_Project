import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {


    const data = useLoaderData()




    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Our Best Doctors</h1>
                <p className='mt-5 px-75'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            <Suspense fallback={<h2>Loading......</h2>}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-40'>
                    {
                        data.map((singleDoctor) => <Doctor key={singleDoctor.id} singleDoctor={singleDoctor}></Doctor>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Doctors;