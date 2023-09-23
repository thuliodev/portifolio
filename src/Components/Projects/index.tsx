import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";

interface Repo {
  name: string
  description: string
}


function Projects() {
  const [repos, setRepos] = useState<Repo[]>([])
  useEffect(() => {
    const getRepos = async () => {
      const response =  await fetch('https://api.github.com/users/thuliobrm/repos')
      const data = await response.json()
      setRepos(data)
    }
    getRepos()
  }, [])

  console.log(repos)
  return (
    <>
      <div id='projects' className='project-text'>
        <p className="text-small">Developed Apps</p>
        <h2 className="section-title">Projects</h2>
      </div>

      {repos.map((repo) => <ProjectCard key={repo.name} name={repo.name} description={repo.description} />)}      
    </>
  )
}

export default Projects;