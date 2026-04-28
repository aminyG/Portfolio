import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatarr.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an Information Technology graduate who enjoys building systems
              and working with data to solve real-world problems. I have
              experience in developing simple web applications and handling data
              to generate useful insights.
              <br />
              <br />
              I’m familiar with
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Web Development, Basic Data Processing, System
                  Design,{" "}
                </b>
              </i>
              and I’m comfortable exploring both technical implementation and
              analytical thinking.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Data-Driven Solutions,{" "}
                </b>
              </i>
              and understanding how systems and data can be used to identify
              issues, improve processes, and support better decision-making.
              <br />
              <br />
              I’m still growing, but I’m eager to learn, try new things, and
              improve both my technical and analytical skills over time.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
