import { TypeAnimation } from 'react-type-animation';
import NavBar from '../Navbar';
import About from '../AboutMe';
import './index.css'
import Projects from '../Projects';
import Aside from '../Aside';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';


function Home() {
  console.log(window.scrollY);
  const [scrollY, setScrollY] = useState(window.scrollY);
  console.log(scrollY);
  const headerMovement = scrollY > 1;

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const e = event as any
      setScrollY(e.target.defaultView.pageYOffset) 
    })
  }, [])

  return (
    <>
      <header className={headerMovement? `header-container movement`:`header-container`}>
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
                  "Front-end Development", 1000,
                  "Back-end Development", 1000,
                  "Full-stack Development ", 1000
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
        
        <Projects />

        <Aside />

        <Footer />
      </section>
    </>
  )
}

export default Home