import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    let navigate = useNavigate();
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5 pt-5'>
            <h1 className='fw-bold violet'>404</h1>
            <h3>The page you are looking for is not found</h3>
            <button onClick={() => navigate('/')} className="btn-full mt-2">Go To Home</button>
        </div>
    );
};

export default NotFound;