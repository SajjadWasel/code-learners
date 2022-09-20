import {  useNavigate } from 'react-router-dom';
import './CourseCard.css';

function CourseCard(props) {
  const { title, img, description, price, mentor, mentor_img, mentor_description, id } = props.course;
  const btnName = props.btn;
  console.log(props.sliceStart, props.sliceEnd)
  const navigate_To = useNavigate();
  const handleClick = () => {
    
    window.location.pathname === "/courses" ? navigate_To(`course/${id}`) : navigate_To(`courses/course/${id}`);
    
  }


  return (
    <div data-aos="zoom-in-up" className='course-card d-flex flex-column flex-md-row border border-infor m-3'>
      <div>
        <img src={img} className='h-100' alt="" />
      </div>
      <div className='p-4'>
        <div className='d-flex align-items-center'>
          <img className='mentor rounded me-2 mb-2' src={mentor_img} alt="" />
          <div>
            <h5>{mentor}</h5>
            <p>{mentor_description}</p>
          </div>
        </div>
        <h5 className='fw-bold'>{title}</h5>
        <p>
          {description.slice(props.sliceStart, props.sliceEnd)}<span title={description}>...</span>
        </p>
        <div className="d-flex align-items-center justify-content-between mt-3">
          <h2 className="violet fw-bold">{price}</h2>
          {/* <Link to={courseUrl}> */}
            <button onClick={() => handleClick()} className="btn-full">{btnName}</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;