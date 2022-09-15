import React from 'react';
import './About.css';
import { Container, Row } from 'react-bootstrap';
import '../CustomComponents/CustomComponents.css';


const About = (props) => {
    return (
        <>

            <div className='about container row mx-auto mt-4'>

                <div className='col-md-5 m-2 mx-auto'>
                    <img className='about-img img-fluid' src="https://images.unsplash.com/photo-1662731969605-05179bf7653b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='about-body col-md-6 m-2 mt-md-0 mt-5'>
                    <h1 className="fw-bold"><span className="violet">About</span> Us</h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda est necessitatibus ipsum sed placeat ea impedit. Alias in excepturi maiores enim consequuntur quasi unde quis ea dolore sunt minima quisquam nam tempore, tenetur ad ducimus. Corrupti sapiente ullam officia facere harum earum exercitationem nostrum at repellat unde dolor, blanditiis praesentiumm tempore, tenetur ad ducimus. Corrupti sapiente ullam officia facere harum earum exercitationem nostrum at repellat unde dolor, blanditiis pm tempore, tenetur ad ducimus. Corrupti sapiente ullam officia facere harum earum exercitationem nostrum at repellat unde dolor, blanditiis p!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda est necessitatibus ipsum sitatibus ipsum sitatibus ipsum sitatibus ipsum sitatibus ipsum
                    </p>
                    <div className='text-center text-md-start'>
                        <button className='btn-full me-0 me-md-3'>{props.text}</button>
                        <button className='btn-outline'>{props.text2}</button>
                    </div>
                </div>
            </div>

            {/* ===== Why Choose Us ======= */}
            <div className='about container row mx-auto mt-4'>

                <div className='about-body col-md-6 m-2 mt-md-0 mt-5 ms-0 ms-md-5'>
                    <h1 className="fw-bold">Why<span className="violet"> Choose</span> Us</h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda est necessitatibus ipsum sed placeat ea impedit. Alias in excepturi maiores enim consequuntur quasi unde quis ea dolore sunt minima quisquam nam tempore, tenetur ad ducimus. Corrupti sapiente ullam officia facere harum earum exercitationem nostrum at repellat unde dolor, blanditiis praesentiumm tempore, tenetur ad ducimus. Corrupti sapiente ullam officia facere harum earum exercitationem nostrum at repellat unde dolor, blanditiis pm tempore, tenetur ad ducimus. Corrupti sapiente ullam officia facere harum earum exercitationem nostrum at repellat unde dolor, blanditiis p!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda est necessitatibus ipsum sitatibus ipsum sitatibus ipsum sitatibus ipsum sitatibus ipsum
                    </p>
                    <div className='text-center text-md-start'>
                        <button className='btn-full me-0 me-md-3'>{props.text}</button>
                        <button className='btn-outline'>{props.text2}</button>
                    </div>
                </div>

                <div className='col-md-5 m-2 mx-auto d-none d-md-block'>
                    <img className='about-img img-fluid' src="https://images.unsplash.com/photo-1662731969605-05179bf7653b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>

            </div>

        </>
    );
};

export default About;