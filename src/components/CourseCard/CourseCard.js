import './CourseCard.css';

function CourseCard(props) {
  const { title, img, description, price, mentor, mentor_img, mentor_description } = props.course;
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
          {description.slice(0, 100)}<span title={description}>...</span>
        </p>
        <div className="d-flex align-items-center justify-content-between mt-3">
          <h2 className="violet fw-bold">{price}</h2>
          <button className="btn-full">Enroll</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;