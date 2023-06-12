import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Feliz Dia dos Namorados</h2>
                <img src="https://i.pinimg.com/originals/ce/4b/ba/ce4bba73fef3152f88d86c8e5ace08bc.gif"/>
                <h4>Aceita mil e uma aventuras comigo, meu amor?</h4>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    )
}


