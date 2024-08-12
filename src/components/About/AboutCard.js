import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Oi gente, eu sou a <span className="purple">Eduarda Santos </span>
            de <span className="purple"> Francisco Morato, São Paulo.</span>
            <br />
            No momento sou apenas uma estudante.
            <br />
            Atualmente estou Realizando o ensino superior na Anhanguera em Analise e Desenvolvimento de Sistemas, mas já conclui o técnico em Desenvolvimento de Sistemas.
            <br />
            <br />
            Além da codificação, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar jogos eletronicos
            </li>
            <li className="about-activity">
              <ImPointRight /> Ler livros de diferentes temas
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Sua única limitação é aquela que você impõe em sua própria mente."{" "}
          </p>
          <footer className="blockquote-footer"> Napoleon Hill, 
            "Mais esperto que o Diabo".</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
