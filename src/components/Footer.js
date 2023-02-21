import React from "react";
import { FaCopyright, FaFacebook, FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
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
        <ul>
          <a href="#">
            <FaEnvelope />
          </a>
        </ul>
      </div>
      <div className="copyright"><span>© 2023, by baongoc_bnx</span></div>
      <p className="more">IF YOU ARE USING A SCREEN READER AND ARE HAVING PROBLEMS USING THIS WEBSITE, PLEASE CALL 0947730012 FOR ASSISTANCE.</p>
    </div>
  );
}

export default Footer;
