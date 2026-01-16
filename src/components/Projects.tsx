import { useEffect, useState } from "react";
import ProjectCard from "./widgets/ProjectCard";
import ProjectDetail from "./widgets/ProjectDetail";
import { AnimatePresence } from "framer-motion";

const projectData = [
  {
    name: "Project 1",
    description:
      "A project description. More details about the project go here. a bit longer to fill space. Even more text to see how it looks. Add a little more.",
    technologies: ["React", "TypeScript"],
    demoLink: "https://example.com/demo1",
    githubLink: "https://github.com/example/project1",
  },
  {
    name: "Project 2",
    description: "Another project description.",
    technologies: ["Vue", "JavaScript"],
    demoLink: "https://example.com/demo2",
    githubLink: "https://github.com/example/project2",
  },
  {
    name: "Project 3",
    description: "Yet another project description.",
    technologies: ["Angular", "TypeScript"],
    demoLink: "https://example.com/demo3",
    githubLink: "https://github.com/example/project3",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projectData)[0]
  >(null);

  const [isClosing, setIsClosing] = useState(false);

  const handleProjectClick = (project: (typeof projectData)[0]) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setIsClosing(true);
    // Let it fade out, then unmount
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 200); // Match your exit animation duration
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="text-[#EEEEEE] mt-16 flex flex-col justify-center relative"
    >
      <h1 className="text-center font-heading font-semibold text-5xl">
        Featured Projects
      </h1>

      <div
        className="
        mt-6
        w-[15%]
        self-center
        h-px
        bg-linear-to-r
        from-[#66FCF1]/00
        via-[#3D968F]
        to-[#66FCF1]/00
        mb-28
      "
      ></div>

      <div className="grid grid-cols-2 gap-10">
        {projectData.map((project) => (
          <ProjectCard
            key={project.name}
            {...project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={handleClose}
            isClosing={isClosing}
          />
        )}
      </AnimatePresence>

      {/* <div className="text-end font-body cursor-pointer text-sm mt-8">
        Click here to see more projects →
      </div> */}
    </section>
  );
}
