import React from "react";
import Project from "./Project";
import { previousProjects, mainProject } from "@/lib/projectsData";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <h3 className="py-4 my-4 text-3xl">Main Project:</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {mainProject &&
            mainProject.map((project) => (
              <Project
                key={project.slug}
                title={project.title}
                backgroundImg={project.backgroundImg}
                projectUrl={project.projectUrl}
                tech={project.tech}
                isMainProject={true}
                description={project.description}
              />
            ))}
        </div>
        <h3 className="py-4 my-8 text-3xl">Previous Projects:</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {previousProjects &&
            previousProjects.map((project) => (
              <Project
                key={project.slug}
                title={project.title}
                backgroundImg={project.backgroundImg}
                projectUrl={project.projectUrl}
                tech={project.tech}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
