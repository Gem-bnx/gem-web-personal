import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import banner from "../img/banner.png";

function Contact() {
  return (
    <section id="contact" className="pl ps">
      <div className="container">
        <div className="intro">
          <div className="heading">
            <p>Contact me</p>
          </div>
        </div>
        <div className="row">
          <div className="contact-info">
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <FaPhone className="i-contact" />
              <span>   094 77 30 012</span>
            </a>
          </div>
          <div className="contact-info">
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <FaEnvelope className="i-contact" />
              <span>    baongoc.bnx@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
