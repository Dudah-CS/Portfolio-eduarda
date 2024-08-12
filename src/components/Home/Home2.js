import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              VOU ME <span className="purple"> APRESENTAR </span> UM POUCO
            </h1>
            <p className="home-about-body">
            Eu me apaixonei por programação e aprendi algumas coisas, eu acho… 🤷‍♀️
              <br />
              <br />
              Eu ainda estou me aventurando nas áreas de &nbsp;
              <i>
                <b className="purple">Análise Desenvolvimento de Sistemas</b>{" "}
              </i>
              <br />
              <br />
              Sempre que possível, também tento codificar algo em <b className="purple">Banco de Dados</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <p>
            Sinta-se à vontade para se <span className="purple">conectar comigo </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dudah-CS"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
        
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eduarda-santos-4b6a2b288/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__dxduda/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
