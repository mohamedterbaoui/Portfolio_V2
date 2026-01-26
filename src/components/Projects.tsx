import { useEffect, useState } from "react";
import ProjectCard from "./widgets/ProjectCard";
import ProjectDetail from "./widgets/ProjectDetail";
import { AnimatePresence } from "framer-motion";

const projectData = [
  {
    name: "Atrium",
    description:
      "A web platform for the university department to manage academic resources, users, and access levels.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Supabase"],
    role: "Full-Stack Developer",
    duration: "Ongoing",
    Type: "Academic Project",
    Platform: "Web Application",
    ProblemStatement:
      "The department needed a single system to manage academic resources, users, and permissions.",
    Solution:
      "Atrium centralizes resources and user access, with authentication and role-based permissions.",
    KeyFeatures: [
      "Authentication and role-based access control",
      "Resource management and data persistence",
    ],
    TechnicalDecisions: [
      "Used Supabase for authentication and database to simplify backend setup",
      "Used TailwindCSS for fast styling and consistent layout",
    ],
    Challenges:
      "Designing a flexible data model and handling role-based permissions.",
    imagesUrl: [
      "/screenshots/atrium/thumbnail.png",
      "/screenshots/atrium/1.png",
      "/screenshots/atrium/2.png",
      "/screenshots/atrium/3.png",
      "/screenshots/atrium/4.png",
    ],
    futureImprovements:
      "Add an admin dashboard for analytics and better user management.",
    demoLink: "https://atrium-i17h.onrender.com/",
    githubLink: "https://github.com/udem-diro/atrium",
  },
  {
    name: "Trndzy",
    description:
      "A responsive business landing page with animated sections and smooth scrolling.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    role: "Frontend Developer",
    duration: "1 month",
    Type: "Personal Project",
    Platform: "Web Application",
    ProblemStatement:
      "Create a modern landing page that highlights features and encourages conversions.",
    Solution:
      "A single-page site with animated sections, responsive layout, and smooth navigation.",
    KeyFeatures: [
      "Animated sections using Framer Motion",
      "Responsive design with TailwindCSS",
    ],
    TechnicalDecisions: [
      "Used Framer Motion for simple, reusable animation patterns",
      "Used TailwindCSS for quick responsive layout and styling",
    ],
    Challenges:
      "Keeping animations smooth while maintaining performance on mobile devices.",
    imagesUrl: [
      "/screenshots/LandingPage/thumbnail.png",
      "/screenshots/LandingPage/1.png",
      "/screenshots/LandingPage/2.png",
      "/screenshots/LandingPage/3.png",
      "/screenshots/LandingPage/4.png",
    ],
    futureImprovements:
      "Add a contact form with backend integration and analytics tracking.",
    demoLink: "https://businesslandingpage.onrender.com/",
    githubLink: "https://github.com/mohamedterbaoui/BusinessLandingPage",
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
      <h1 className="text-center font-heading font-semibold text-5xl">
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
