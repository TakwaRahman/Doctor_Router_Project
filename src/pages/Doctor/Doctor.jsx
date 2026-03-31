import React from 'react';

const Doctor = ({singleDoctor}) => {

    const {image, experience, registrationNumber, speciality, education, name} = singleDoctor
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm p-5 rounded-2xl mt-10">
                <figure>
                    <img
                        className='h-100 w-90 rounded-2xl'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <span className='badge bg-green-200 text-green-800 py-4 px-4 rounded-3xl'>Available</span>
                    <h2 className="card-title">{name}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary px-35">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;