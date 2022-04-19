import React from 'react';
import notFound from '../../../images/NotFound.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-info mt-5'>Dentist Bro is sleeping</h2>
            <p className='text-center mt-2 mb-5'>
                <img src={notFound} alt="" />

            </p>
        </div>
    );
};

export default NotFound;