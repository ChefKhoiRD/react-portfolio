import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import './Footer.css';

const Footer = () => {
    return (
      <section className = "footer">
        <ul className = "footer-icons">
          
            <li className = "social-icons">
              <a
                href = "https://github.com/ChefKhoiRD/"
                style = {{ color: "white" }}
                target = "_blank" 
                rel = "noopener noreferrer"
              >
                <IconContext.Provider value = {{color: '#53C783'}}>
                  <AiFillGithub />
                </IconContext.Provider>
              </a>
            </li>

            <li className = "social-icons">
              <a
                href = "https://www.linkedin.com/in/khoi-vu-7046291a9/"
                style = {{ color: "white" }}
                target = "_blank" 
                rel = "noopener noreferrer"
              >
                <IconContext.Provider value = {{color: '#53C783'}}>
                  <FaLinkedinIn />
                </IconContext.Provider>
                
              </a>
            </li>
          </ul>
      </section>
    )
}

export default Footer;