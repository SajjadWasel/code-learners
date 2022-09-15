import React from 'react';
import './Counts.css';

const Counts = () => {
    return (
        <div className='container d-flex counts wrap'>
            <div className='m-5 px-5 py-3 bg-white rounded shadow'>
                <h2 className='violet fw-bold'>2020+</h2>
                <h4 className='text-secondary'>
                    Total Students
                </h4>
            </div>
            <div className='m-5 px-5 py-3 bg-white rounded shadow'>
                <h2 className='violet fw-bold'>1900+</h2>
                <h4 className='text-secondary'>Happy Clients</h4>
            </div>
            <div className='m-5 px-5 py-3 bg-white rounded shadow'>
                <h2 className='violet fw-bold'>2300+</h2>
                <h4 className='text-secondary'>Course Sold</h4>
            </div>
        </div>
    );
};

export default Counts;