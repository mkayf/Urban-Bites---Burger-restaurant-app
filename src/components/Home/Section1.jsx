import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Burger from "../../assets/hero/hero-2.png"


const Section1 = () => {
  return (
    <section className='hero-section'>
        <Container>
            <Row>
                <Col lg={7} className='mb-5 mb-lg-0 burger-div'>
                    <div className='position-relative'>
                        <img src={Burger} alt="Burger" className='hero-burger'/>
                        <div className='price_badge'>
                        <div className="badge_text">
                            <h4>Only</h4>
                            <h3>Rs.630/-</h3>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="hero_text text-center">
                        <h1>New Burger</h1>
                        <h2>With Onion</h2>
                        <p className='text-white pt-2 pb-4'>
                        Introducing the "Gourmet Fusion Burger", succulent beef, creamy avocado, caramelized onions, and signature tangy sauce. A delicious explosion of flavors!
                        </p>
                        <Link to="/" className="order_now">
                        Order Now
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section1