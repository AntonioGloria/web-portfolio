import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import projectData from './assets/projectData.json';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Container className='my-5'>
        <h2>My Projects</h2>
        <Row className='my-5'>
          {projectData.map((project, i) => {
            return (
              <Col key={i} xs={12} md={6} className='d-flex justify-content-center'>
                <ProjectCard
                  title={project.title}
                  urlDeploy={project.urlDeploy}
                  urlRepo={project.urlRepo}
                  description={project.description}
                  thumbnail={project.thumbnail}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}