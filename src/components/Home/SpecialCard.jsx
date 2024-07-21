import React from 'react'
import { Col } from "react-bootstrap";

const SpecialCard = ({cardData}) => {
    const {image, title, desc} = cardData;
  return (
    <>
        <Col md={6} lg={4} className='mb-4 mb-md-0'>
            <div className="about-box text-center">
                <div className="about-icon">
                    <img src={image} alt="speciality image" className='img-fluid'/>
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </Col>
    </>
  )
}

export default SpecialCard