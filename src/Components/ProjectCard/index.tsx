import { Card } from "react-bootstrap"
import {FiGithub} from 'react-icons/fi'

import './index.css'

interface ProjectCardProps {
  name: string,
  description: string
  html_url: string
}

function ProjectCard({ name, description, html_url }: ProjectCardProps) {
  const image_url = `${html_url}/blob/main/image.png?raw=true`
  return (<div className="projects-card-container">
  <Card style={{ height: '100%', maxWidth: '300px' }}>
    <Card.Img variant="top" src={image_url} height={180} />
    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <a href={html_url} target="_blank"><FiGithub size={25} /></a>
    </Card.Body>
  </Card>
  
</div>)
}

export default ProjectCard