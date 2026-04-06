import toast from 'react-hot-toast';



const getStooredDoctors = () => {
    const stooredDoctorSTR = localStorage.getItem('book-doctor')

    if (stooredDoctorSTR) {
        const stooredDoctorData = JSON.parse(stooredDoctorSTR);
        return stooredDoctorData
    }
    else {
        return [];
    }
}


const addToStoreDB = (id) => {
    const stooredDoctorData = getStooredDoctors();

    if (stooredDoctorData.includes(id)) {
        toast.error('You already booked this doctor ❌')
    }
    else {
        stooredDoctorData.push(id);
        console.log(stooredDoctorData);

        const data = JSON.stringify(stooredDoctorData)
        localStorage.setItem('book-doctor', data)

        toast.success('Appointment Booked Successfully ✅')
    };
}


export { addToStoreDB }