import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import hospitalmanagement from "../../Assets/Projects/hospitalmanagement.png";
import objectdetection from "../../Assets/Projects/object-detection.jpg"
import ETHEReact from "../../Assets/Projects/ETHEReact.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCard
              imgPath={hospitalmanagement}
              isBlog={false}
              title="Hospital Management System"
              description="Hospital Management System using MySQL, Php and Bootstrap is very convenient and more friendly.
              Has ability to accept the appointment by the doctor to acknowledge the patient that their appointment has been approved"
              ghLink="https://github.com/dragonwarrier/Hospital-Management-System"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat-app"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase."
              ghLink="https://github.com/dragonwarrier/chat-app"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ETHEReact}
              isBlog={false}
              title="Decentralized E-commerce"
              description="Demonstrating e-commerce capabilities without any database powering the backend but the EVM standing tall! This is not a product in iteself but an idea for aspiring blockchain enthusiasts to uncover the potential; end-to-end!"
              ghLink="https://github.com/dragonwarrier/Decentralized_eCom"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={objectdetection}
              isBlog={false}
              title="AI-Object-Detection"
              description="This is a web AI object detection. You can use it in your web browser. This web application uses the camera of your device to detect objects."
              ghLink="https://github.com/dragonwarrier/ai-object-detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
