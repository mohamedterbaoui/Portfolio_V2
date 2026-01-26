import { useEffect, useState } from "react";
import ProjectCard from "./widgets/ProjectCard";
import ProjectDetail from "./widgets/ProjectDetail";
import { AnimatePresence } from "framer-motion";

const projectData = [
  {
    name: "Atrium",
    description:
      "A project description. More details about the project go here. a bit longer to fill space. Even more text to see how it looks. Add a little more.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Supabase"],
    role: "Full-Stack Developer",
    duration: "3 months",
    Type: "Academic Project",
    Platform: "Web Application",
    ProblemStatement:
      "Develop a platform to connect students with on-campus resources and services.",
    Solution:
      "Atrium is a web application that serves as a centralized hub for students to access various campus resources and services. It features user authentication, a resource directory, and an intuitive interface to enhance student engagement and support.",
    KeyFeatures: [
      "User Authentication: Secure sign-up and login for students.",
      "Resource Directory: Comprehensive listing of campus resources.",
    ],
    TechnicalDecisions: [
      "Chose Supabase for backend to leverage its real-time database and authentication features.",
      "Implemented TailwindCSS for rapid UI development and consistent styling.",
    ],
    Challenges:
      "Managing real-time data synchronization and ensuring responsive design across different screen sizes.",
    imagesUrl: [
      "/screenshots/atrium/thumbnail.png",
      "/screenshots/atrium/1.png",
      "/screenshots/atrium/2.png",
      "/screenshots/atrium/3.png",
      "/screenshots/atrium/4.png",
    ],
    futureImprovements:
      "Integrate AI-driven recommendations for resources based on user behavior.",
    demoLink: "https://atrium-i17h.onrender.com/",
    githubLink: "https://github.com/udem-diro/atrium",
  },
  {
    name: "Trndzy",
    description:
      "A project description. More details about the project go here. a bit longer to fill space. Even more text to see how it looks. Add a little more.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    role: "Full-Stack Developer",
    duration: "3 months",
    Type: "Academic Project",
    Platform: "Web Application",
    ProblemStatement:
      "Develop a platform to connect students with on-campus resources and services.",
    Solution:
      "Atrium is a web application that serves as a centralized hub for students to access various campus resources and services. It features user authentication, a resource directory, and an intuitive interface to enhance student engagement and support.",
    KeyFeatures: [
      "User Authentication: Secure sign-up and login for students.",
      "Resource Directory: Comprehensive listing of campus resources.",
    ],
    TechnicalDecisions: [
      "Chose Supabase for backend to leverage its real-time database and authentication features.",
      "Implemented TailwindCSS for rapid UI development and consistent styling.",
    ],
    Challenges:
      "Managing real-time data synchronization and ensuring responsive design across different screen sizes.",
    imagesUrl: [
      "/screenshots/atrium/thumbnail.png",
      "/screenshots/atrium/1.png",
      "/screenshots/atrium/2.png",
      "/screenshots/atrium/3.png",
      "/screenshots/atrium/4.png",
    ],
    futureImprovements:
      "Integrate AI-driven recommendations for resources based on user behavior.",
    demoLink: "https://atrium-i17h.onrender.com/",
    githubLink: "https://github.com/udem-diro/atrium",
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
      className="text-[#EEEEEE] mt-28 md:mt-40 flex flex-col justify-center relative"
    >
      <h1 className="text-center font-heading font-semibold text-4xl md:text-5xl">
        Featured Projects
      </h1>

      <div
        className="
        mt-4
        md:mt-6
        w-[30%]
        md:w-[15%]
        self-center
        h-px
        bg-linear-to-r
        from-[#66FCF1]/00
        via-[#3D968F]
        to-[#66FCF1]/00
        mb-24
        md:mb-36
      "
      ></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
