import React from 'react';
import { Container } from 'react-bootstrap';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import './Award.css';

const Award = () => {
    return (
        <div>

            <h1 className="text-center fw-bold mt-5 pt-5">
                Our <span className="violet">Awards</span>
            </h1>
            <h3 className='fw-bold text-center text-secondary mb-5'>We Won More Than 13+ Awards From Various Association</h3>

            <Container className="award d-flex align-items-center">

                <div className="w-75 h-35 shadow-lg p-3 mb-5 bg-body rounded single-award">
                    <h5 className='coral'>
                        <CheckBadgeIcon className='badge-icon'></CheckBadgeIcon>
                        Best EdTech Bd</h5>
                    <p>Orgainization Sumit, Orphim</p>
                    <p>2022 - Dhaka, Bangladesh</p>
                </div>
                <div className="w-75 h-35 shadow-lg p-3 mb-5 bg-body rounded single-award">
                    <h5 className='coral texts'>
                        <CheckBadgeIcon className='badge-icon'></CheckBadgeIcon>
                        Best EdTech Bd</h5>
                    <p className='texts'>Orgainization Sumit, Orphim</p>
                    <p className='texts'>2022 - Dhaka, Bangladesh</p>
                </div>
                <div className="w-75 h-35 shadow-lg p-3 mb-5 bg-body rounded single-award">
                    <h5 className='coral'>
                        <CheckBadgeIcon className='badge-icon'></CheckBadgeIcon>
                        Best EdTech Bd</h5>
                    <p>Orgainization Sumit, Orphim</p>
                    <p>2022 - Dhaka, Bangladesh</p>
                </div>
                <div className="w-75 h-35 shadow-lg p-3 mb-5 bg-body rounded single-award">
                    <h5 className='coral'>
                        <CheckBadgeIcon className='badge-icon'></CheckBadgeIcon>
                        Best EdTech Bd</h5>
                    <p>Orgainization Sumit, Orphim</p>
                    <p>2022 - Dhaka, Bangladesh</p>
                </div>
                


            </Container>
            <Container className="award d-flex align-items-center">

            <div className="w-75 h-35 shadow-lg p-3 mb-5 bg-body rounded single-award">
                    
                    <h5 className='coral'>
                        <CheckBadgeIcon className='badge-icon'></CheckBadgeIcon>
                        Best EdTech Bd</h5>
                    <p>Orgainization Sumit, Orphim</p>
                    <p>2022 - Dhaka, Bangladesh</p>
                </div><div className="w-75 h-35 shadow-lg p-3 mb-5 bg-body rounded single-award">
                    <h5 className='coral'>
                        <CheckBadgeIcon className='badge-icon'></CheckBadgeIcon>
                        Best EdTech Bd</h5>
                    <p>Orgainization Sumit, Orphim</p>
                    <p>2022 - Dhaka, Bangladesh</p>
                </div><div className="w-75 h-35 shadow-lg p-3 mb-5 bg-body rounded single-award">
                    <h5 className='coral'>
                        <CheckBadgeIcon className='badge-icon'></CheckBadgeIcon>
                        Best EdTech Bd</h5>
                    <p>Orgainization Sumit, Orphim</p>
                    <p>2022 - Dhaka, Bangladesh</p>
                </div><div className="w-75 h-35 shadow-lg p-3 mb-5 bg-body rounded single-award">
                    <h5 className='coral'>
                        <CheckBadgeIcon className='badge-icon'></CheckBadgeIcon>
                        Best EdTech Bd</h5>
                    <p>Orgainization Sumit, Orphim</p>
                    <p>2022 - Dhaka, Bangladesh</p>
                </div>


            </Container>
        </div>
    );
};

export default Award;