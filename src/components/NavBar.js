import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsList } from "react-icons/bs";

function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <div className="header">
      <div className="navbar container">
        <div onClick={() => setShow(!show)} className="nav-toggle">
          <BsList className="btn"></BsList>
        </div>

        <div className={show == false ? "hide-nav-pages": "nav-pages"}>
          <ul>
            <a href="#">Home</a>
          </ul>
          <ul>
            <a href="#about">About me</a>
          </ul>
          <ul>
            <a href="#projects">Projects</a>
          </ul>
          <ul>
            <a href="#contact">Contact</a>
          </ul>
        </div>
        <div className="social-icons">
          <ul>
            <a href="https://www.facebook.com/baongoc.bnx/">
              <FaFacebook />
            </a>
          </ul>
          <ul>
            <a href="https://github.com/Gem-bnx">
              <FaGithub />
            </a>
          </ul>
          <ul>
            <a href="#">
              <FaLinkedin />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
