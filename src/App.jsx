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
        <h2 className='mb-5'>My Projects</h2>
        <Row className='gy-4'>
          {projectData.map((project, i) => {
            return (
              <Col key={i} xs={12} md={6} className='d-flex justify-content-center'>
                <ProjectCard project={project}/>
              </Col>
            )
          })}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}