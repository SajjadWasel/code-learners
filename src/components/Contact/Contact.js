import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container'>
            <h1 className="fw-bold text-center mt-5 mb-5"><span className="violet">Contact</span> Us</h1>
            <div data-aos="zoom-in-up" className='contact-form d-flex justify-content-evenly flex-wrap'>
                <div className='text-center text-md-start'>

                    <h2 className='fw-bold violet'>Contact Details</h2>
                    <p>Sanmar Orchid Tower</p>
                    <p>R/N-3, Bonani, Dhaka</p>
                    <p>email@fridaylearners.com</p>
                    <p>Support: 0123456789</p>

                </div>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Your Text Here</Form.Label>
                            <Form.Control as="textarea" placeholder="Your Message" />
                        </Form.Group>
                        <button className='btn-full' type="submit">
                            Submit
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;