import React from 'react'
import {Container, Row, Carousel} from 'react-bootstrap'
import Customer1 from '../../assets/blog/review-author-1.jpg'
import Customer2 from '../../assets/blog/review-author-2.jpg'
import Customer3 from '../../assets/blog/review-author-3.jpg'
import Customer4 from '../../assets/blog/review-author-5.jpg'


const Section6 = () => {
  return (
    <>
      <section className='user-feedbacks-section'>
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="customer-img">
                    <img src={Customer1} alt="Customer profile image" />
                  </div>
                  <p>The burgers at Urban Bites are out of this world! The flavors are so unique, and the quality is always top-notch. The delivery was fast, and my food arrived hot and fresh. Highly recommend!</p>
                  <div className="customer-rating mb-2">
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                  </div>
                  <h5>By Michael Haul</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="customer-img">
                    <img src={Customer2} alt="Customer profile image" />
                  </div>
                  <p>Urban Bites is my new go-to for burgers. The 'BBQ Ranch Chicken' was cooked to perfection, and the flavors were amazing. The website is straightforward, and the delivery was spot on. Can't wait to try more from the menu!</p>
                  <div className="customer-rating mb-2">
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                  </div>
                  <h5>By Emily Watson</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="customer-img">
                    <img src={Customer3} alt="Customer profile image" />
                  </div>
                  <p>Urban Bites offers a burger experience like no other. The 'Double Cheese Stack' was delicious, and the portions were generous. The online ordering system is user-friendly, and my order arrived right on time. Will definitely be back!</p>
                  <div className="customer-rating mb-2">
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                  </div>
                  <h5>By James C.</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="customer-img">
                    <img src={Customer4} alt="Customer profile image" />
                  </div>
                  <p>I was blown away by the quality of the burgers from Urban Bites. The 'Veggie Supreme' was bursting with flavor and so satisfying. The website is easy to use, and my food arrived hot and fresh. Will order again soon!</p>
                  <div className="customer-rating mb-2">
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                  </div>
                  <h5>By Jessica Parker</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Section6