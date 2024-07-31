import React, { useEffect, useState } from 'react'
import { SpecialityCardData } from './SpecialityCardData'
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'
import SpecialCard from './SpecialCard';
const Section2 = () => {


  return (
    <>
        <section className='mini-about-section'>
            <Container>
                <Row className='flex justify-content-center'>
                    <Col lg={9} className="text-center">
                        <h1>The burger tastes better when you eat it with your family</h1>
                        <p className=''>Welcome to Urban Bites, where we craft delicious, gourmet burgers using the freshest ingredients. Our passion for flavor and quality sets us apart, making every bite a satisfying and memorable experience.</p>
                        <Link to="/" className="order_now btn_red explore-btn">Explore full menu</Link>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='mini-about-wrapper'>
            <Container>
                <Row className='justify-content-md-center'>
                    {SpecialityCardData.map((data) => (
                        <SpecialCard key={data.id} cardData={data}/>
                    ))}                    
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section2