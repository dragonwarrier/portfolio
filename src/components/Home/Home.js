import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/mine.jfif";
import Tilt from "react-parallax-tilt";
function Home() {
  return (
    <section className="project-section">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-jong">
            <Col md={9} className="home-header">
              <h1 className="heading">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! &nbsp;&nbsp;&nbsp;I'M <strong className="main-name">Jodhan Peng</strong>
              </h1>
              <div style={{ padding: 0, textAlign: "center" }}>
                <Type />
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={2} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
export default Home;