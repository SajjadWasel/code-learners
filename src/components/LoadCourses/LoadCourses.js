import { useState } from 'react';
import { useEffect } from 'react';

const LoadCourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return [courses];
};

export default LoadCourses;

