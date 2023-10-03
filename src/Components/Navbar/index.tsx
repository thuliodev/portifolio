
import './index.css'

function NavBar() {

  return (
    <nav className='nav-bar'>
      <p className="portifolio">Portifoli
        <span className="o">o</span>
        </p>
        <div className='burger-menu'>
            <input type="checkbox" id='burger' />
            <span></span>
            <span></span>
            <span></span>
          <ul className='nav-links'>
            <a className='nav-text' href="/">Home</a>
            <a className='nav-text' href="#about">About</a>
            <a className='nav-text' href="#projects">Projects</a>
            <a className='nav-text' href="#contact">Contact</a>
          </ul>
        </div>
  </nav>
  )
}

export default NavBar