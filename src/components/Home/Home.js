import React from 'react';
import { Container } from 'react-bootstrap';
import Counts from '../Counts/Counts';
import './Home.css';
import About from '../About/About';
import EmailForm from '../EmailForm/EmailForm';
import SocialIcons from '../SocialIcons/SocialIcons';


const Home = () => {
    return (
        <>
            <div className='home mt-2'>
                <Container className="home-content d-flex justify-content-center align-items-center wrap">
                    <div className='p-3 me-md-2'>
                        <h4 className="text-secondary pt-5">#1 Programming Learning Platfrom in BD</h4>
                        <br />
                        <h1 className='fw-bold'>Engaging & Accessible <span className="violet">Online Courses</span> For All</h1>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ing elit. Dicta cing elit. Dicta, ing elit. Dicta, ing elit. Dicta, ing elit. Dicta!</p>
                        <br />
                        <EmailForm>btn-full</EmailForm>
                    </div>

                </Container>

                {/* Count Section */}
                <Counts></Counts>
                




                

            </div>

            {/* About Section */}
            <h1 className='fw-bold mt-5 text-center'><span className="violet">About</span> Us</h1>
                
            <About text='Know More About Us' text2='Contact Us' className='text-start'></About>
        </>
    );
};

export default Home;