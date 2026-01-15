import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

type ProjectDetailProps = {
  project: {
    name: string;
    description: string;
    technologies: string[];
    demoLink: string;
    githubLink: string;
  };
  onClose: () => void;
  isClosing?: boolean;
};

export default function ProjectDetail({
  project,
  onClose,
  isClosing,
}: ProjectDetailProps) {
  return (
    <motion.div
      className="
        fixed inset-0 z-50 bg-[#011824] text-[#EEEEEE] p-8 overflow-y-auto
      "
      layoutId={isClosing ? undefined : project.name} // Remove layoutId when closing
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.2 },
      }}
    >
      <div className="w-[40%] mx-auto mt-12">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-[#66FCF1] hover:text-[#46ddd3] text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        <h1 className="text-4xl font-heading font-bold mb-4">{project.name}</h1>

        <div className="mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-[#000D14] text-[#EEEEEE] px-2 py-1 rounded-md mr-2"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-body text-lg mb-6 h-300">{project.description}</p>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => window.open(project.demoLink, "_blank")}
            className="w-fit border border-[#45A29F] text-[#45A29F] px-6 py-2 rounded-md 
          hover:bg-[#3a8a87] hover:text-[#EEEEEE] transition-colors duration-300 ease-in-out
          flex items-center justify-center gap-4 font-heading font-semibold text-sm cursor-pointer"
          >
            Demo
          </button>
          <button
            onClick={() => window.open(project.githubLink, "_blank")}
            className="w-fit border border-[#45A29F] text-[#45A29F] px-6 py-2 rounded-md 
          hover:text-[#000C12] hover:border-[#EEEEEE] hover:bg-[#EEEEEE] transition-colors duration-300 ease-in-out
          flex items-center justify-center gap-4 font-heading font-semibold text-sm cursor-pointer"
          >
            Github
          </button>
        </div>
      </div>
    </motion.div>
  );
}
