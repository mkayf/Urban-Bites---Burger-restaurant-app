import React from 'react'
import BurgerData from './BurgerData'
import { Col, Container, Row } from 'react-bootstrap'
import BurgerCard from './BurgerCard'

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
                        <BurgerCard burgerData={data} key={data.id}/>
                    ))
                }                
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section3