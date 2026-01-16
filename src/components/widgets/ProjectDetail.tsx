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
        scrollbar-thin scrollbar-thumb-[#66FCF1]/50 scrollbar-track-transparent
      "
      layoutId={isClosing ? undefined : project.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    >
      <div className="w-[40%] mx-auto mt-16">
        {/* Close */}
        <button
          onClick={onClose}
          className="
            text-[#66FCF1] hover:text-[#46ddd3] text-2xl cursor-pointer
            hover:scale-[1.15] transition-transform duration-300 ease-in-out
            fixed top-[5%] right-[25%]
          "
        >
          <FaTimes />
        </button>

        {/* Hero */}
        <div className="w-full h-60 bg-amber-300 mb-12 rounded-lg"></div>

        {/* Title */}
        <h1 className="text-4xl font-heading font-bold mb-4">{project.name}</h1>

        {/* Tech stack */}
        <div className="mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-[#000D14] text-[#EEEEEE] px-2 py-1 rounded-md mr-2"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 🔹 Project Overview */}
        <div className="grid grid-cols-2 gap-4 text-sm mb-10 text-[#C5C6C7]">
          <div>
            <span className="font-semibold text-[#66FCF1]">Role:</span> Frontend
            Developer
          </div>
          <div>
            <span className="font-semibold text-[#66FCF1]">Duration:</span> 3
            weeks
          </div>
          <div>
            <span className="font-semibold text-[#66FCF1]">Type:</span> Personal
            Project
          </div>
          <div>
            <span className="font-semibold text-[#66FCF1]">Platform:</span> Web
            Application
          </div>
        </div>

        {/* Description */}
        <p className="text-body text-lg mb-10">{project.description}</p>

        {/* 🔹 Problem → Solution */}
        <h2 className="text-xl font-heading font-bold mb-3">Problem</h2>
        <p className="text-body text-lg mb-6">
          Users struggled with navigating complex interfaces and understanding
          how different sections of the application were connected.
        </p>

        <h2 className="text-xl font-heading font-bold mb-3">Solution</h2>
        <p className="text-body text-lg mb-10">
          I designed a clean, animated interface with clear hierarchy and smooth
          transitions to guide users naturally through the experience.
        </p>

        {/* Key Features */}
        <h2 className="text-xl font-heading font-bold mb-4">Key Features</h2>
        <ul className="text-body text-lg mb-10 list-disc list-inside space-y-1">
          <li>Animated project transitions using Framer Motion</li>
          <li>Responsive layout across all screen sizes</li>
          <li>Reusable component architecture</li>
          <li>Keyboard-accessible modal interactions</li>
        </ul>

        {/* 🔹 Technical Decisions */}
        <h2 className="text-xl font-heading font-bold mb-4">
          Technical Decisions
        </h2>
        <ul className="list-disc list-inside text-body text-lg mb-10 space-y-2">
          <li>Used React + TypeScript for scalability and type safety</li>
          <li>Chose Framer Motion for layout animations over pure CSS</li>
          <li>Tailwind CSS for rapid styling and design consistency</li>
        </ul>

        {/* 🔹 Challenges & Learnings */}
        <h2 className="text-xl font-heading font-bold mb-4">
          Challenges & Learnings
        </h2>
        <p className="text-body text-lg mb-10">
          Managing layout animations between components was challenging.
          Learning how `layoutId` works allowed me to create smooth transitions
          while maintaining performance and control.
        </p>

        {/* 🔹 Screenshots / Gallery */}
        <h2 className="text-xl font-heading font-bold mb-4">Screenshots</h2>
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="h-40 bg-[#000D14] rounded-lg"></div>
          <div className="h-40 bg-[#000D14] rounded-lg"></div>
          <div className="h-40 bg-[#000D14] rounded-lg"></div>
          <div className="h-40 bg-[#000D14] rounded-lg"></div>
        </div>

        {/* 🔹 Future Improvements */}
        <h2 className="text-xl font-heading font-bold mb-4">
          Future Improvements
        </h2>
        <ul className="list-disc list-inside text-body text-lg mb-12 space-y-1">
          <li>Add automated tests</li>
          <li>Improve accessibility for screen readers</li>
          <li>Optimize animations for low-end devices</li>
        </ul>

        {/* CTA */}
        <div className="flex justify-end gap-4">
          <button
            onClick={() => window.open(project.demoLink, "_blank")}
            className="
              w-fit border border-[#45A29F] text-[#45A29F] px-6 py-2 rounded-md
              hover:bg-[#3a8a87] hover:text-[#EEEEEE]
              transition-colors duration-300 ease-in-out
              font-heading font-semibold text-sm
            "
          >
            Demo
          </button>

          <button
            onClick={() => window.open(project.githubLink, "_blank")}
            className="
              w-fit border border-[#45A29F] text-[#45A29F] px-6 py-2 rounded-md
              hover:bg-[#3a8a87] hover:text-[#EEEEEE]
              transition-colors duration-300 ease-in-out
              font-heading font-semibold text-sm
            "
          >
            Github
          </button>
        </div>
      </div>
    </motion.div>
  );
}
