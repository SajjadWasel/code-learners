import { useParams } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import LoadCourses from '../LoadCourses/LoadCourses';


const SpecificCourse = () => {
    const id = useParams('courseId');
    const [courses] = LoadCourses();
    const currentCourseId = id.courseId;
    const currentCourse = courses.slice(currentCourseId, currentCourseId+1);
    return (
        <div>
            <h1 className="fw-bold text-center pt-5">Our <span className='violet'>Courses</span></h1>

            <div className='d-flex flex-column align-items-center'>

                
                {
                    currentCourse?.map(course => <CourseCard key={course.id} course={course} btn={'Check Out'} sliceStart={0}  sliceEnd={3000} ></CourseCard>)
                }

            </div>
        </div>
    );
};

export default SpecificCourse;

