import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import datamodel from "../../Assets/Projects/datamodel.png";
import presence from "../../Assets/Projects/presence.png";
import sales from "../../Assets/Projects/sales.png";
import hcr from "../../Assets/Projects/hcr.png";
import coffee from "../../Assets/Projects/coffee.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Retail Product Sales Analysis"
              description="Analyzed retail product sales data using Excel to identify top-performing products and sales trends. Built interactive dashboards with pivot tables and charts to monitor performance. Generated insights on customer purchasing patterns and provided data-driven recommendations to improve sales and inventory management."
              demoLink="https://shorturl.at/wvESn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hcr}
              isBlog={false}
              title="HCR & OCR Performance Web App"
              description="Developed a web-based application to process and analyze organizational data. Built dashboards to visualize key performance metrics and support decision-making. Improved data accessibility and monitoring through structured and user-friendly interfaces."
              ghLink="https://github.com/aminyG/ocrplnnp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={presence}
              isBlog={false}
              title="Electronic Attendance System"
              description="Built a cross-platform attendance system using Flutter and Laravel. Implemented face recognition for automated identity verification and attendance logging. Designed role-based access control for multi-level system management."
              ghLink="https://github.com/aminyG/thesis"
              demoLink="https://www.figma.com/design/BNddemNESX46FPPVO6cyYQ/absensi?node-id=0-1&m=dev&t=Nt23PKj6kSpqZzvf-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datamodel}
              isBlog={false}
              title="Minimarket Data Modeling"
              description="Designed data models for a minimarket business scenario by analyzing product and transaction flows. Structured relationships between products, customers, and transactions to support inventory and sales processes."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffee}
              isBlog={false}
              title="Coffeeshop Website"
              description="Developed a website to support product display and ordering process. Organized menu and product information to improve user experience and support basic business operations digitally."
              ghLink="https://github.com/aminyG/coffee"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
