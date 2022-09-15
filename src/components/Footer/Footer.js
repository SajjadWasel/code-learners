import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () => {
    return (
        <div className='d-flex flex-md-row flex-column justify-content-evenly align-items-md-baseline align-items-center mt-5 pt-5 bg-violet text-light'>
            <div className='icons p-5 w-md-100 text-center text-dark'>
                <h3 className="fw-bold bg-light p-3 rounded"><span className="violet">Friday</span> Learners</h3>
                <SocialIcons></SocialIcons>
            </div>
            <div className='d-flex flex-column mb-5'>
                <h3 className='fw-bold'>Pages</h3>
                <Link className='text-decoration-none text-light' to='home'>Home</Link>
                <Link className='text-decoration-none text-light' to='about'>About</Link>
                <Link className='text-decoration-none text-light' to='courses'>Courses</Link>
                <Link className='text-decoration-none text-light' to='contact'>Contact</Link>
            </div>

            <div className='d-flex flex-column mb-5'>
                <h3 className='fw-bold'>Courses</h3>
                <Link className='text-decoration-none text-light' to='home'>Home</Link>
                <Link className='text-decoration-none text-light' to='about'>About</Link>
                <Link className='text-decoration-none text-light' to='courses'>Courses</Link>
                <Link className='text-decoration-none text-light' to='contact'>Contact</Link>
            </div>

            <div className='d-flex flex-column mb-5'>
                <h3 className='fw-bold'>Contact</h3>
                <p className='text-decoration-none text-light' to='home'>R/N-3, Bonani, Dhaka</p>
                <p className='text-decoration-none text-light' to='home'>email@fridaylearners.com</p>
                <p className='text-decoration-none text-light' to='home'>Support: 0123456789</p>
                
            </div>
            <div className='form'>


            </div>
        </div>
    );
};

export default Footer;