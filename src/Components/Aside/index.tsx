import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"
import { FaXTwitter } from 'react-icons/fa6'
import './index.css'

function Aside () {
  return (
    <div className="socials-container">
      <ul>
        <li><a href="https://github.com/thuliobrm" target="_blank"><FiGithub size={25} /></a></li>
        <li><a href="https://www.instagram.com/thuliobmoreira/" target="_blank"><FiInstagram size={25} /></a></li>
        <li><a href="https://twitter.com/BorbaThulio" target="_blank"><FaXTwitter className='fa' size={25} /></a></li>
        <li><a href="https://www.linkedin.com/in/thulioborba/" target="_blank"><FiLinkedin size={25} /></a></li>
      </ul>
    </div>
  )
}

export default Aside