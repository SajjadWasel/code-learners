import CourseCard from '../CourseCard/CourseCard';
import LoadCourses from '../LoadCourses/LoadCourses';


const CoursesPage = () => {

    const [courses] = LoadCourses();

    return (
        <div>
            <h1 className="fw-bold text-center pt-5">Our <span className='violet'>Courses</span></h1>

            <div className='d-flex flex-column align-items-center'>

                
                {
                    courses.map(course => <CourseCard key={course.id} course={course} btn={'Enroll'} sliceStart={0}  sliceEnd={100}></CourseCard>)
                }

            </div>
        </div>
    );
};

export default CoursesPage;

