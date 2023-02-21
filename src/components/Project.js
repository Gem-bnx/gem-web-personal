import React from "react";
function Project({heading, skills, image, script,url}) {
  console.log("heading");
  return (
    <div className="project-wrapper">
      <div className="project-inner">
        <a className="project-image">
          <img src={image}></img>
          <a className="project-script" href={url}>{script}</a>
        </a>
        <div className="project-info">
          <h3 className="project-heading">{heading}</h3>
          <div className="project-skills">
            {skills.map((skill, index) => {
              return (
                <div className="project-skill">{skill}</div>
              )
            })}
          </div>
        </div>
        <a className="project-show" href={url}>View Project</a>
      </div>
    </div>
  );
}

export default Project;
