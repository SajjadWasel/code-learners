import Card from 'react-bootstrap/Card';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';



function TestimonialsCard(props) {
    const { name, review, img } = props.testimonial;
    return (

            <Card className='text-dark m-3 mb-5 p-3 wrap'>
                <Card.Img style={{
                    height: "100px",
                    width: "100px"
                }} className='rounded-circle' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {review}
                    </Card.Text>
                </Card.Body>
            </Card>
    );
}

export default TestimonialsCard;