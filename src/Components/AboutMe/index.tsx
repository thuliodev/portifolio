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
            Hello, my first contact with technology happened when I was quite young, through some video games. Later on, curiosity led me to explore how things actually worked, but that would take some time. It wasn't until I turned 31 that I decided to transition into the tech field. My initial background is in business, and my second one is in analysis and system development, with a specialization in full-stack development.<br></br>

            Currently, I am actively seeking opportunities in the tech industry. My tech career is in its early stages, but I'm determined to showcase my talent and skills. I believe that I can compensate for my lack of experience with dedication, hard work, and the soft skills I've acquired over several years of working in the business sector.<br></br>

            My primary focus is to continuously learn new things and further enhance the skills I possess in order to consistently deliver a better user experience.
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