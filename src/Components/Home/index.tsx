import { TypeAnimation } from 'react-type-animation';
import NavBar from '../Navbar';
import About from '../AboutMe';
import './index.css'
import Projects from '../Projects';


function Home() {
  

  return (
    <>
      <header className="header-container">
        <NavBar />
      </header>

      <section className="home-container">
        <div className="profession-container">
          <div className="name-container">
            <h1 className="name-content">
              <span>Hi There, I&apos;m  </span>
              <span className='personalized-name'>Thúlio Borba</span>
            </h1>

            <h2 className='profession-content'>
              I am into <span className="fs-dev"><TypeAnimation
                sequence={[
                  "Front-end Developer", 1000,
                  "Back-end Developer", 1000,
                  "Full-stack Developer ", 1000
                ]}
                repeat={Infinity}
                speed={25}
                style={{ color: "#536d88" }}
              /></span>
            </h2>
            <h4 className='text-apresentation-content'>
              Looking for an opportunity in the Web Development area, focused, with excellent communication skills who loves to work in a team.
            </h4>
          </div>
        </div>

        <About />

        <footer className="footer-container">
          <div className='socials-logos'>
            <a href="#"><i className="ri-linkedin-line"></i></a>
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-github-line"></i></a>
          </div>
        </footer>
      </section>

      <Projects />
    </>
  )
}

export default Home