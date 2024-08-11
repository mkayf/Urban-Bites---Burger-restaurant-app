import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

const Section4 = () => {
  return (
    <>
      <section className="promotion-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} alt="photos of people eating burgers" />
            </Col>
            <Col lg={6}>
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              "A burger isn't just a meal—it's a shared experience. At Urban Bites, we believe a great burger sparks conversations, creates memories, and brings people together. Enjoy every bite and the moments that come with it."
              </p>
              <ul>
              <li><p>Juicy beef patty topped with fresh lettuce, tomatoes, and our special sauce.</p></li>
              <li><p>Grilled chicken burger with a tangy BBQ sauce and melted cheddar cheese.</p></li>
              <li><p>Vegan burger made with a hearty black bean patty, avocado, and vegan mayo.</p></li>
              <li><p>Double cheeseburger with crispy bacon and caramelized onions.</p></li>
              <li><p>Classic cheeseburger with American cheese, pickles, and ketchup.</p></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG parallax section */}
      <section className="bg-parallax-scroll"></section>

    </>
  );
};

export default Section4;
