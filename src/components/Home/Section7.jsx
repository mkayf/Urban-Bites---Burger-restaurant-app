import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section7 = () => {
  return (
    <>
        <section className="delivery-section">
            <Container>
                <Row className=''>
                    <Col className='text-center '>
                        <h4>We Guarantee</h4>
                        <h2>30 minutes delivery</h2>
                        <p className='mb-5'>
                        Enjoy your favorite gourmet burgers delivered hot and fresh to your doorstep in just 30 minutes with Urban Bites' lightning-fast delivery service!
                        </p>
                        <Link to="/" className="btn_red order_now rounded-0">
                        Call: 999-888-777
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    )
}

export default Section7