import Avatar2 from '../../assets/avatar.png'
import Card from '../Card'

import './index.css'

function About() {
  const skills = [
    'Unix & Bash',
    'Git',
    'Github',
    'Bootstrap',
    'Javascript',
    'Typescript',
    'React',
    'React Testing Library',
    'Context API & React Hooks',
    'Redux',
    'Docker',
    'MySQL',
    'Node.js',
    'Express'
  ]
  return (
    <>
      <div id='about' className="about-me">
        <div className="img-container">
          <img src={Avatar2} alt="Thulio Borba" />
        </div>

        <div className="about-me-text">
          <h2 className="about">About
            <span className="me"> me</span>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio minima alias minus praesentium eius numquam ipsam est suscipit repudiandae vitae aspernatur nihil dicta magni enim reprehenderit provident, possimus consequuntur quasi!
          </p>
        </div>
      </div>

      <div>
        <h3 className='skill-list-text'>Skills <span className='list'>List</span></h3>
        <p className='skill-text-complement'>Here are the languages and technologies that I have contact with.</p>
      </div>

      <div className="skills-container">

      {skills.map((skill) => <Card title={skill} />)}

        
      </div>
    </>
  )
}

export default About