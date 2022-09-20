import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const SpecificCourse = () => {
    const { id } = useParams();
    const [detail, setdetail] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default SpecificCourse;