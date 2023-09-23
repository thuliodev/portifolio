import { Card } from "react-bootstrap"

interface ProjectCardProps {
  name: string,
  description: string
}

function ProjectCard({ name, description }: ProjectCardProps) {
  return (<div className="projects-card-container">
  <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src={Newyear} /> */}
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <p className="card-subtitle">React.js Context API & React Hooks CSS </p>
    </Card.Body>
  </Card>
</div>)
}

export default ProjectCard