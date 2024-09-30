import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

const HeaderSocials = () => {
  return (
    <div className="home_socials">
        <a href="https://www.linkedin.com/in/pushkar-vyas/" className="home_socials-link" target="_blank">
        <FaLinkedin />
        </a>

        <a href="https://github.com/pushkar-vyas" className="home_socials-link" target="_blank">
        <FaGithub />
        </a>

        <a href="pushkarvyas204@gmail.com" className="home_socials-link" target="_blank">

        <MdOutlineAttachEmail />
        </a>

        <a href="" className="home_socials-link" target='blank' >
        <FaTwitter />
        </a>

        <a href="https://www.instagram.com/" className="home_socials-link" target='blank' >
        <FaInstagram />
        </a>

        

        

        
    </div>
  )
}

export default HeaderSocials