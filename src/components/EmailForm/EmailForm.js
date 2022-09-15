import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './EmailForm.css';

const EmailForm = () => {
    const navigate = useNavigate();

    return (
        <Form className='wrap'>
            <Form.Control type="email" placeholder="Enter email" className='email-input border rounded me-md-3' />
            <button onClick={() => navigate('/home')} type='submit' className="btn-full d-md-flex justify-content-center align-items-center">
                Click Here to Sign Up
                <ArrowRightIcon className='svg-icon'></ArrowRightIcon>
            </button>
        </Form>
    );
};

export default EmailForm;