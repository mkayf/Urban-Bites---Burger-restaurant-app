import React from 'react'
import BurgerData from './BurgerData'
import { Col, Container, Row } from 'react-bootstrap'
import BurgerCard from './BurgerCard'
import {Link} from 'react-router-dom'


const renderRatingStars = (rating) => {
    // const iconId = useId();
    const stars = [];
    // Rating is 2.5
    for(let i = 0; i < 5; i++){
        if(rating > 0.5){
            stars.push(<i key={`fill${i}`} className="bi bi-star-fill"></i>);
            rating--;
        }
        else if(rating > 0 && rating < 1){
            stars.push(<i key={`half${i}`} className="bi bi-star-half"></i>);
            rating--;
        }
        else{
            stars.push(<i key={`empty${i}`} className="bi bi-star"></i>)
        }
    }
    return stars;
}


const Section3 = () => {
  return (
    <>
    <section className='mini-menu-section'>
        <Container>
            <Row>
                <Col lg={{span : 8, offset : 2}} className='text-center mb-5'>
                    <h2>OUR CRAZY BURGERS</h2>
                    <p className='para'>
                    Urban Bites' Crazy Burgers: wild flavors, cheesy sauce and bold toppings for an unforgettable taste adventure. Try one today!
                    </p>

                </Col>
            </Row>
            <Row>
                {
                    BurgerData.map((data) => (
                        <BurgerCard burgerData={data} renderRatingStars={renderRatingStars} key={data.id}/>
                    ))
                }                
            </Row>


            <Row className='pt-5'>
                <Col sm={6} md={5}>
                    <div className="ads-box ads-img-1 mb-5 mb-md-0">
                        <h4 className='mb-0'>GET YOUR FREE</h4>
                        <h5>CHEESE FRIES</h5>
                    <Link to="/" className="btn_red order_now">
                        Learn more
                        </Link>
                    </div>
                </Col>
                <Col sm={6} md={7}>
                    <div className="ads-box ads-img-2">
                        <h4>GET YOUR FREE</h4>
                        <h5>CHICKEN BURGERS</h5>
                        <Link to="/" className="btn_red order_now">
                        Learn more
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}
    
export default Section3