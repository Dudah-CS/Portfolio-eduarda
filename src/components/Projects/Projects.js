import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import adivinha from "../../Assets/Projects/adivinhaAlura.png";
import filmes from "../../Assets/Projects/filmesAlura.png";
import jogadores from "../../Assets/Projects/Cadastrojogadores.png";
import formulario from "../../Assets/Projects/cadastroCliente.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que eu fiz.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adivinha}
              isBlog={false}
              title="Jogo Adivinha"
              description="Esse projeto foi feito em um dos cursos de 5 dias da Alura aonde aprendemos o basico do javaScript"
              ghLink="https://github.com/Dudah-CS/jogo-de-adivinha"
              demoLink="https://dudah-cs.github.io/jogo-de-adivinha/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={filmes}
              isBlog={false}
              title="Catálogo de Filmes"
              description="Esse projeto também foi feito na mesma semana do projeto adivinha com o mesmo proposito."
              ghLink="https://github.com/Dudah-CS/Filmes-Series-Alura"
              demoLink="https://dudah-cs.github.io/Filmes-Series-Alura/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jogadores}
              isBlog={false}
              title="Cadastro de jogadores"
              description="Esse projeto eu realizei em uma aula de PW, quando eu estava fazendo o tecnico na ETEC, ele foi feito nas linguagens PHP, HTML e Banco de Dados"
              ghLink="https://github.com/Dudah-CS/Cadastro-Jogadores"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formulario}
              isBlog={false}
              title="Formulário do Cliente"
              description=" Esse projeto eu realizei em uma aula de Desenvolvimento Web, quando eu estava fazendo o tecnico na ETEC, foi feito utiliando HTML, CSS"
              ghLink="https://github.com/Dudah-CS/Formulario-ficha-do-cliente"
              demoLink="https://dudah-cs.github.io/Formulario-ficha-do-cliente/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
