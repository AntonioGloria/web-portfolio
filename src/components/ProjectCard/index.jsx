import { Card } from "react-bootstrap";

export default function ProjectCard(props) {
  const { title, description, thumbnail, urlDeploy, urlRepo } = props;

  return (
    <Card>
      <Card.Img src={thumbnail} alt={title}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-start">{description}</Card.Text>
        <div className="d-flex justify-content-around">
          <a href={urlDeploy}>
            <i className="fa-solid fa-globe"></i>
          </a>
          <a href={urlRepo}>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </Card.Body>
    </Card>
  )
}