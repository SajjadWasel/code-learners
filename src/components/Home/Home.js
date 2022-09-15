import React from 'react';
import { Container } from 'react-bootstrap';
import Counts from '../Counts/Counts';
import './Home.css';
import About from '../About/About';
import EmailForm from '../EmailForm/EmailForm';
import LoadCourses from '../LoadCourses/LoadCourses';
import CourseCard from '../CourseCard/CourseCard';


const Home = () => {
    const [courses] = LoadCourses();
    const popularCourses = [];

    courses.map(course => {
        if (course.id <= 5) {
            popularCourses.push(course);
        }
    })


    return (
        <>
            <div className='home mt-2'>
                <Container data-aos="zoom-in-up" className="home-content d-flex justify-content-center align-items-center wrap">
                    <div className='p-3 me-md-2'>
                        <h4 className="text-secondary pt-5">#1 Programming Learning Platfrom in BD</h4>
                        <br />
                        <h1 className='fw-bold'>Engaging & Accessible <span className="violet">Online Courses</span> For All</h1>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ing elit. Dicta cing elit. Dicta, ing elit. Dicta, ing elit. Dicta, ing elit. Dicta!</p>
                        <br />
                        <EmailForm>btn-full</EmailForm>
                    </div>

                </Container>

                {/* ==== Count Section ==== */}
                <Counts></Counts>


            </div>

            {/* ===== About Section ===== */}
            <div data-aos='zoom-in-up'>
                <About text='Know More About Us' text2='Contact Us' className='text-start'></About>
            </div>

            {/* ====== Course Section ===== */}
            <h1 className="fw-bold text-center mt-5 pt-5 mt-md-3">
                Our <span className="violet">Popular</span> Courses
            </h1>
            <div className='mt-5 pt-2 d-flex flex-column align-items-center' data-aos='zoom-in-down'>

                {
                    popularCourses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }

            </div>
            
        </>
    );
};

export default Home;