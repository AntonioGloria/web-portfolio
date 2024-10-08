import { Badge, Card } from 'react-bootstrap';

export default function ProjectCard({project}) {
  const {
      title,
      description,
      thumbnail,
      urlDeploy,
      urlRepo,
      technologies,
      icon
    } = project;

  return (
    <Card border={'primary'}>
      <Card.Header className='d-flex align-items-center'>
        <img src={icon} className='me-3'/>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Img src={thumbnail} alt={title}/>
      <Card.Body>
        <Card.Text className='text-start'>{description}</Card.Text>
        <Card.Text className='text-start'>
          {technologies.map((tech, i) => <Badge className='me-2 bg-opacity-25' pill key={i}>{tech}</Badge>)}
        </Card.Text>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-around fs-3'>
        <Card.Link
          title='Live Site'
          href={urlDeploy}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa-solid fa-globe'/>
        </Card.Link>
        <Card.Link
          title='Repository'
          href={urlRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa-brands fa-github'/>
        </Card.Link>
      </Card.Footer>
    </Card>
  )
}