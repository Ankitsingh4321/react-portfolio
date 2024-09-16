import React from 'react'
import logo from '../assets/AS.png'
import "./Navbar.css"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
const Navbar = () => {
  return (
    <>
      <nav className='mb-20 flex items-center justify-between'>
        <div className='flex flex-shrink-0 items-center'>
          <img src={logo} alt="logo" className='mx-2 w-20 white-filter' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/ankit-singh-2779601a4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Ankitsingh4321" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://instagram.com/the_ankii_singh?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/qr/LPNK4OGFUB5IC1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
