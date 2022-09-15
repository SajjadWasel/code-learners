import React from 'react';
import './Counts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Counts = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div data-aos="zoom-in-up" className='container d-flex counts jutify-content-center align-items-center flex-wrap flex-md-nowrap'>
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