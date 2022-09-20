import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () => {
    return (
        <div className='d-flex flex-md-row flex-column justify-content-evenly align-items-md-baseline align-items-center mt-5 pt-5 bg-violet text-light'>
            <div className='icons p-5 w-md-100 text-center text-dark'>
                <h3 className="fw-bold bg-light p-3 rounded"><span className="violet">Coding</span> Learners</h3>
                <SocialIcons></SocialIcons>
            </div>
            
            

            <div className='d-flex me-5 pe-5 flex-column mb-5'>
                <h3 className='fw-bold'>Site Map</h3>
                <Link className='text-decoration-none text-light' to='home'>Home</Link>
                <Link className='text-decoration-none text-light' to='about'>About</Link>
                <Link className='text-decoration-none text-light' to='courses'>Courses</Link>
                <Link className='text-decoration-none text-light' to='contact'>Contact</Link>
            </div>


            <div className='d-flex flex-column mb-5'>
                <h3 className='fw-bold'>Courses</h3>
                <p className='text-decoration-none text-light'>Data Science</p>
                <p className='text-decoration-none text-light'>Compititive Programming</p>
                <p className='text-decoration-none text-light'>Data Analyst</p>
                <p className='text-decoration-none text-light'>Artificial Inteligence</p>
            </div>

            <div className='mb-5 p-2 text-light'>
                <h3 className='fw-bold'>Contact</h3>
                <p>Sanmar Orchid Tower</p>
                <p>R/N-3, Bonani, Dhaka</p>
                <p>email@fridaylearners.com</p>
                <p>Support: 0123456789</p>

            </div>
        </div>
    );
};

export default Footer;