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
              <span>Olá, eu sou  </span>
              <span className='personalized-name'>Thúlio Borba</span>
            </h1>

            <h2 className='profession-content'>
              <span className="fs-dev"><TypeAnimation
                sequence={[
                  "Desenvolvedor Front-end", 1000,
                  "Desenvolvedor Back-end", 1000,
                  "Desenvolvedor Full-stack ", 1000
                ]}
                repeat={Infinity}
                speed={25}
                style={{ color: "#536d88" }}
              /></span>
            </h2>
            <h4 className='text-apresentation-content'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sunt dignissimos atque veritatis tempora blanditiis iure aperiam perferendis voluptas consectetur sequi facilis sint quaerat. Tempora est aperiam dignissimos blanditiis vel!
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