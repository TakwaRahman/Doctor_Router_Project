import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import MedicalService from '../MedicalService/MedicalService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctors></Doctors>
            <MedicalService></MedicalService>
        </div>
    );
};

export default Home;