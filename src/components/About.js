import React from "react";
import me from "../img/me.jpeg";
import myCV from "../file/BaoNgoc_CV.pdf"
function About() {
  return (
    <section id="about" className="pl ps">
      <div className="container">
        <div className="intro">
          <div className="heading">
            <p>About me</p>
          </div>
          <hr></hr>
          <div className="detail">
            <p>My introduction</p>
          </div>
        </div>
        <div className="row">
          <img src={me} className="about-img"></img>
          <div className="info">
              <p>
                My name is Le Thi Bao Ngoc (Gem) - 20. <br></br>I am a sophomore
                at FPT Da Nang University. I specialize in Software Engineer.
                <br></br>
                I'm passionate about generating special interface and seeking
                opportunies for improving myself in IT specialization and
                foreign languages. Hope that you'll comfortably see through my
                products and give me a chance to contact you if proper.
              </p>
              <a href={myCV} className="cv-btn">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
