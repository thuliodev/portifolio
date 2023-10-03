import { useEffect, useState } from "react";

import ProjectCard from "../ProjectCard";
import "./index.css"

interface Repo {
  name: string
  description: string
  html_url: string
}


function Projects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [showedRepos, setShowedRepos] = useState<Repo[]>([])
  const [shouldShowAll, setShouldShowAll] = useState(false)

  useEffect(() => {
    const getRepos = async () => {
      const response =  await fetch('https://api.github.com/users/thuliobrm/repos')
      const data = await response.json()
      setRepos(data)
      setShowedRepos(data.slice(0, 3))
    }
    getRepos()
  }, [])

  const showAllRepos = () => {
    setShowedRepos(repos)
    setShouldShowAll(true)
  }

  const showLessRepos = () => {
    setShowedRepos(repos.slice(0, 3))
    setShouldShowAll(false)
  }

  return (
    <>
      <div id='projects' className='project-text'>
        <h2 className="section-title">Projects</h2>
        <p className="text-small">Developed Applications</p>
      </div>

      <div className="project-container">
        {showedRepos.map((repo) => <ProjectCard key={repo.name} name={repo.name} html_url={repo.html_url} description={repo.description} />)}
      </div>

      <button 
      className="project-btn" 
      onClick={shouldShowAll ? showLessRepos : showAllRepos}>{shouldShowAll ? "View less" : "View More"}
      </button>
    </>
  )
}

export default Projects;