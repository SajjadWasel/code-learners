import React from 'react';
import About from '../About/About';
import Award from '../Awards/Award';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])
    return (
        <div>

            <div data-aos="zoom-in">
                <About text='Contact Us' text2='Visit Courses'></About>
            </div>

            <div data-aos="flip-right">
                <Award ></Award>
            </div>


        </div>
    );
};

export default AboutPage;