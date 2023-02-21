import React from "react";
import Project from "./Project";
function Projects({ Project }) {
  const projects = [
    {
      heading: "Todo App",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
      image:
        "https://res.cloudinary.com/diowgvamj/image/upload/v1676572784/project1_ws60ex.png",
      script: "My very first web application to keep track of my tasks.",
      url: "https://dever-note-app.vercel.app/",
    },
    {
      heading: "Expense Tracker",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
      image:
        "https://res.cloudinary.com/diowgvamj/image/upload/v1676572783/project2_yfvvbg.png",
      script: "My app to keep track of expense, useful for students.",
      url: "https://dever-note-app.vercel.app/",
    },
    {
      heading: "Convert Unit",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
      image:
        "https://res.cloudinary.com/diowgvamj/image/upload/v1676572783/project3_hw7q9e.png",
      script: "Used to convert between distance units",
      url: "https://dever-note-app.vercel.app/",
    },
    {
      heading: "Note App",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
      image:
        "https://res.cloudinary.com/diowgvamj/image/upload/v1676905730/project4_nvvtwu.png",
      script: "Upgrated form and combinated between before apps.",
      url: "https://dever-note-app.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="pl ps">
      <div className="container">
        <div className="intro">
          <div className="heading">
            <p>Projects</p>
          </div>
          <hr></hr>
          <div className="detail">
            <p>Special footprints on my journal.</p>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => {
            return (
              <Project
                heading={project.heading}
                image={project.image}
                skills={project.skills}
                script={project.script}
                url={project.url}
              ></Project>
            );
          })}
          {/* <Project
              heading={project.heading}
              skills={project.skills}
              script={project.script}
              image={project.image}
            ></Project>; */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
