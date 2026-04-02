import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import succesDoctor from '../../assets/success-doctor.png'
import succesPatients from '../../assets/success-patients.png'
import succesReview from '../../assets/success-review.png'
import sucesStuffs from '../../assets/success-staffs.png'

const MedicalService = () => {

    const doctorCount = useSpring({
        from: { Number: 0 },
        to: { Number: 199 },
        config: { duration: 4000 }
    });

    const reviewCount = useSpring({
        from: { number: 0 },
        to: { number: 467 },
        config: { duration: 4000 }
    });

    const patientCount = useSpring({
        from: { number: 0 },
        to: { number: 1900 },
        config: { duration: 4000 }
    });

    const staffCount = useSpring({
        from: { number: 0 },
        to: { number: 300 },
        config: { duration: 4000 }
    });


    return (
        <div>
            <div className='text-center mt-20'>
                <h1 className='text-4xl font-bold'>We Provide Best Medical Services</h1>
                <p className='mt-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>

            <div className='flex justify-center mt-5 gap-10'>
                <div className='border pl-5 py-5 pr-15 bg-white border-none rounded-xl'>
                    <img className='w-10' src={succesDoctor} alt="" />
                    <p className='font-bold text-4xl py-2'><animated.span>
                        {doctorCount.Number.to(n => n.toFixed(0))}
                    </animated.span>+</p>
                    <p>Total Doctors</p>
                </div>
                <div className='border pl-5 py-5 pr-15 bg-white border-none rounded-xl'>
                    <img className='w-10' src={succesReview} alt="" />
                    <p className='font-bold text-4xl py-2'><animated.span>
                        {reviewCount.number.to(n => n.toFixed(0))}
                    </animated.span>+</p>
                    <p>Total Review</p>
                </div>
                <div className='border pl-5 py-5 pr-15 bg-white border-none rounded-xl'>
                    <img className='w-10' src={succesPatients} alt="" />
                    <p className='font-bold text-4xl py-2'><animated.span>
                        {patientCount.number.to(n => n.toFixed(0))}
                    </animated.span>+</p>
                <p>Total Patients</p>
            </div>
            <div className='border pl-5 py-5 pr-15 bg-white border-none rounded-xl'>
                <img className='w-10' src={sucesStuffs} alt="" />
                <p className='font-bold text-4xl py-2'><animated.span>
                    {staffCount.number.to(n => n.toFixed(0))}
                </animated.span>+</p>
            <p>Total Stuffs</p>
        </div>


        </div >

        </div >
    );
};

export default MedicalService;