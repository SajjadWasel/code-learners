import React from 'react';
import './About.css';
import { Container, Image } from 'react-bootstrap';
import '../CustomComponents/CustomComponents.css';


const About = (props) => {
    return (
        <>
            <Container className="about wrap align-items-start mt-5">

                <div>
                    <Image className='h-75 w-75' src='https://images.unsplash.com/photo-1662731969605-05179bf7653b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></Image>
                </div>

                <div>
                    <h1 className='fw-bold'>Best Side <span className="violet">Hustle Platform</span> For Students</h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A laboriosam in facere beatae cupiditate, voluptatem dolorum nostrum placeat labore blanditiis recusandae aliquam asperiores molestiae non perferendis dolor sint? Quas hic tenetur ipsam quam delectus sequi in modi vitae corrupti, dolorum tempora ex dolore sed, assumenda necessitatibus cupiditate repellat labore sunt.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A laboriosam in facere beatae cupiditate, voluptatem dolorum nostrum placeat labore blanditiis erferendis dolor sint? Quas hic tenetur ipsam quam delectus
                    </p>
                    {
                        <>
                            <button className="btn-full me-md-3">{props.text}</button>

                            <button className="btn-outline me-md-3">{props.text2}</button>
                        </>
                    }

                </div>

            </Container>

        </>
    );
};

export default About;