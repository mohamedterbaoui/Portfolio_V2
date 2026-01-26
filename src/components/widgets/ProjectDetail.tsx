import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

type ProjectDetailProps = {
  project: {
    name: string;
    description: string;
    technologies: string[];
    role: string;
    duration: string;
    Type: string;
    Platform: string;
    ProblemStatement: string;
    Solution: string;
    KeyFeatures: string[];
    TechnicalDecisions: string[];
    Challenges: string;
    imagesUrl: string[];
    futureImprovements: string;
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
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      imageRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isOpen, activeIndex]);

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
      <div className="w-[95%] sm:w-[60%] md:w-[50%] lg:w-[45%] mx-auto mt-8 md:mt-16">
        {/* Close */}
        <button
          onClick={onClose}
          className="
            text-[#66FCF1] hover:text-[#46ddd3] text-2xl cursor-pointer
            hover:scale-[1.15] transition-transform duration-300 ease-in-out
            fixed top-[3%] right-[3%] sm:right-[17%] md:right-[15%] lg:right-[25%]
          "
        >
          <FaTimes />
        </button>

        <div className="w-full h-60 aspect-4/3 mb-12 rounded-lg overflow-hidden flex justify-center items-center">
          <img
            src={project.imagesUrl ? project.imagesUrl[0] : ""}
            alt="Banner image"
            className="w-full h-full object-cover"
          />
        </div>

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
            <span className="font-semibold text-[#66FCF1]">Role:</span>{" "}
            {project.role}
          </div>
          <div>
            <span className="font-semibold text-[#66FCF1]">Duration:</span>{" "}
            {project.duration}
          </div>
          <div>
            <span className="font-semibold text-[#66FCF1]">Type:</span>{" "}
            {project.Type}
          </div>
          <div>
            <span className="font-semibold text-[#66FCF1]">Platform:</span>{" "}
            {project.Platform}
          </div>
        </div>

        {/* Description */}
        <p className="text-body text-lg mb-10">{project.description}</p>

        {/* 🔹 Problem → Solution */}
        <h2 className="text-xl font-heading font-bold mb-3">Problem</h2>
        <p className="text-body text-lg mb-6">{project.ProblemStatement}</p>

        <h2 className="text-xl font-heading font-bold mb-3">Solution</h2>
        <p className="text-body text-lg mb-10">{project.Solution}</p>

        {/* Key Features */}
        <h2 className="text-xl font-heading font-bold mb-4">Key Features</h2>
        <ul className="text-body text-lg mb-10 list-disc list-inside space-y-1">
          {project.KeyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* 🔹 Technical Decisions */}
        <h2 className="text-xl font-heading font-bold mb-4">
          Technical Decisions
        </h2>
        <ul className="list-disc list-inside text-body text-lg mb-10 space-y-2">
          {project.TechnicalDecisions.map((decision, index) => (
            <li key={index}>{decision}</li>
          ))}
        </ul>

        {/* 🔹 Challenges & Learnings */}
        <h2 className="text-xl font-heading font-bold mb-4">
          Challenges & Learnings
        </h2>
        <p className="text-body text-lg mb-10">{project.Challenges}</p>

        {/* 🔹 Screenshots / Gallery */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {project.imagesUrl.slice(1).map((url, index) => (
            <div
              key={index}
              className="w-full h-30 md:h-48 rounded-md overflow-hidden cursor-pointer"
              onClick={() => {
                setActiveIndex(index);
                setIsOpen(true);
              }}
            >
              <div className="relative w-full h-full overflow-hidden group cursor-pointer">
                <img
                  src={url}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-[#45A29F]/20
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />
              </div>
            </div>
          ))}
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            {/* Prevent closing when clicking content */}
            <div
              className="max-w-5xl w-full max-h-[90vh] overflow-y-auto px-6 scrollbar-thin scrollbar-thumb-[#66FCF1]/50 scrollbar-track-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                {project.imagesUrl.slice(1).map((url, index) => (
                  <img
                    key={index}
                    ref={(el) => {
                      imageRefs.current[index] = el;
                    }}
                    src={url}
                    alt=""
                    className="w-full rounded-lg"
                  />
                ))}
              </div>
            </div>
            <button
              className="
            text-[#66FCF1] hover:text-[#46ddd3] text-2xl cursor-pointer
            hover:scale-[1.15] transition-transform duration-300 ease-in-out
            fixed top-[1.5%] left-[5%] md:hidden
          "
            >
              <FaArrowLeft />
            </button>
          </div>
        )}

        {/* 🔹 Future Improvements */}
        <h2 className="text-xl font-heading font-bold mb-4">
          Future Improvements
        </h2>
        <ul className="list-disc list-inside text-body text-lg mb-12 space-y-1">
          {project.futureImprovements.split("\n").map((improvement, index) => (
            <li key={index}>{improvement}</li>
          ))}
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
              cursor-pointer
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
              cursor-pointer
            "
          >
            Github
          </button>
        </div>
      </div>
    </motion.div>
  );
}
