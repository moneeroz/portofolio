import Image, { StaticImageData } from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { mainProject, previousProjects } from "@/lib/projectsData";

interface Props {
  params: { slug: string };
}

interface Project {
  slug: string;
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  tech: string;
  stack: string;
  overview: string;
  repoLink: string;
  demoSiteLink: string;
  technologies: string[];
  description?: string;
  images?: Array<{ title: string; img: string }>;
}

const Project = ({ params }: Props) => {
  const slug = params.slug;
  const projectsData = [...mainProject, ...previousProjects];
  const project: Project | undefined = projectsData.find(
    (project) => project.slug === slug,
  );

  return (
    <div className="w-full">
      {project && (
        <>
          <div className="w-screen h-[50vh] relative">
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
            <Image
              className="absolute z-1 object-cover"
              fill
              src={project.backgroundImg}
              alt={project.title}
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h2 className="py-2">{project.title}</h2>
              <h3>{project.tech}</h3>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
            <div className="col-span-4">
              <p>Project</p>
              <h2>Overview</h2>
              <p>{project.overview}</p>
              <Link href={project.repoLink} target="_blank" rel="noreferrer">
                <button className="px-8 py-2 mt-4 mr-8">Code</button>
              </Link>
              <Link
                href={project.demoSiteLink}
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-8 py-2 mt-4">Demo</button>
              </Link>
              {project.images?.length && (
                <div className="grid md:grid-cols-2 gap-4 mt-4 mx-10 md:mx-0">
                  {project.images.map((image, index) => (
                    <div>
                      <h2
                        className="text-center text-2xl py-4 my-2"
                        key={index}
                      >
                        {image.title}
                      </h2>
                      <Image
                        key={index}
                        src={image.img}
                        alt={image.title}
                        className="border rounded-xl shadow-md hover:shadow-xl hover:border-transparent transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 h-fit">
              <div className="p-2">
                <p className="text-center font-bold pb-2">Technologies</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                  {project.technologies.map((tech, index) => (
                    <p
                      className="text-gray-600 py-2 flex items-center"
                      key={index}
                    >
                      <RiRadioButtonFill className="pr-1" /> {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/#projects">
              <p className="underline cursor-pointer">Back</p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
