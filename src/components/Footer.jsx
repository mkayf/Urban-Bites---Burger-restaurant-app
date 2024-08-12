import React, { useEffect, useState } from 'react'
import '../styles/FooterStyle.css'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const Footer = () => {
  const [arrowVisible, setArrowVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top : 0,
      behavior : 'smooth',
    })
  }

  const listenToScroll = () => {
    const offset = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > offset ? setArrowVisible(true) : setArrowVisible(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  })


  return (
    <>
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
          <div className="text-center">
            <h5>Location</h5>
            <p>II Chundrigar Road</p>
            <p>Karachi South, Sindh</p>
            <p>Pakistan</p>
          </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
          <div className="text-center">
            <h5>Working Hours</h5>
            <p>Mon-Fri: 9:00AM - 10:00PM</p>
            <p>Saturday: 10:00AM - 11:00PM</p>
            <p>Sunday: 12:00PM - 10:00PM</p>
          </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
          <div className="text-center">
            <h5>Order Now</h5>
            <p>Get your favourite Burger on just one call</p>
            <p>
              <Link to="tel:999888777" className="calling">
                999-888-777
              </Link>
            </p>
          </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Follow us</h5>
              <p>Follow us to get to know about our upcoming burgers</p>
            </div>
            <ul className='list-unstyled'>
            <li>
                    <Link to="https://www.facebook.com" target="_blank">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.twitter.com" target="_blank">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com" target="_blank">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com" target="_blank">
                      <i className="bi bi-youtube"></i>
                    </Link>
                  </li>
            </ul>
          </Col>
        </Row>
        <Row className='copyright-div'>
          <Col>
            <div>
              <ul className='list-unstyled text-center mb-0'>
                <li className='copyright-li'>
                  <p className='mb-0 copyright-para'>
                    &copy; 2024 <span>Muhammad Kaif</span> All rights reserved 
                  </p>
                </li>
                <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>

    {/* Scroll to top */}

    {
      arrowVisible && (<div className='scroll-div' onClick={scrollToTop}>
        <i className='bi bi-arrow-up'></i>
      </div>)
    }
  
    </>
  )
}

export default Footer