import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Aminy Ghaisan Nurdiniyah</span> from{" "}
            <span className="purple">Indonesia</span>.
            <br />
            I’m an{" "}
            <span className="purple">Information Technology graduate</span> with
            an interest in <span className="purple">data</span> and{" "}
            <span className="purple">system development</span>.
            <br />
            I have experience in developing simple web applications and handling
            data, and I like turning ideas into practical solutions, even if
            they start small.
            <br />
            <br />
            Outside of tech, I enjoy activities that keep me engaged and
            inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Following women’s basketball (WNBA)
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tools and technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, even if it’s just a little every day."
          </p>
          <footer className="blockquote-footer">Aminy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
