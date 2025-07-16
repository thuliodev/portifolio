import "./index.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <p className="portifolio">
        Portifoli
        <span className="o">o</span>
      </p>
      <div className="burger-menu">
        <input type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
        <ul className="nav-links">
          <li>
            <a className="nav-text" href="/">
              Home
            </a>
          </li>

          <li>
            {" "}
            <a className="nav-text" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="nav-text" href="#projects">
               Projects
            </a>
          </li>

          <li>
            {" "}
            <a className="nav-text" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="language">
        <ul>
          <li>
            <a href="#">
              <span className="fi fi-br"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fi fi-us"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
