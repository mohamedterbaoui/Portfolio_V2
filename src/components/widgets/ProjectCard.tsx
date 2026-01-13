import { div } from "three/tsl";

type ProjectCardProps = {
  name: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
};

export default function ProjectCard({
  name,
  description,
  technologies,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div
      className="
        flex flex-col justify-between
        bg-[#011824] text-[#EEEEEE] rounded-lg p-4 
        transition-all duration-300 ease-in-out
        hover:shadow-[0_6px_4px_rgba(102,252,241,0.40)]
        shadow-[0_4px_2px_rgba(102,252,241,0.40)]
        hover:scale-[1.02]
        h-120"
    >
      <div className="h-48 bg-amber-200 rounded-sm mb-3">
        <img src="" alt="" />
      </div>

      <h2 className="font-bold text-[#66FCF1] font-heading text-xl">{name}</h2>

      <div className="mb-2 mt-1">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-body text-xs bg-[#000D14] text-[#EEEEEE] px-2 py-1 rounded-md mr-2"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-body text-sm mb-4 mt-2">{description}</p>

      <div className="group w-fit text-[#66FCF1] font-body text-sm flex items-center gap-2 cursor-pointer">
        <div
          className="
            h-px
            w-6
            bg-[#66FCF1]
            transition-all
            duration-300
            ease-in-out
            group-hover:w-10
            group-hover:bg-[#46ddd3]
            "
        ></div>
        <span className="group-hover:text-[#46ddd3]">More details</span>
      </div>

      <div className="flex gap-4 justify-end items-center mt-2">
        <button
          onClick={() => window.open(demoLink, "_blank")}
          className="w-fit mt-4 border border-[#45A29F] text-[#45A29F] px-6 py-2 rounded-md 
      hover:bg-[#3a8a87] hover:text-[#EEEEEE] transition-colors duration-300 ease-in-out
      flex items-center justify-center gap-4 font-heading font-semibold text-sm cursor-pointer"
        >
          Demo
        </button>
        <button
          onClick={() => window.open(githubLink, "_blank")}
          className="w-fit mt-4 border border-[#45A29F] text-[#45A29F] px-6 py-2 rounded-md 
       hover:text-[#000C12] hover:border-[#EEEEEE] hover:bg-[#EEEEEE] transition-colors duration-300 ease-in-out
      flex items-center justify-center gap-4 font-heading font-semibold text-sm cursor-pointer"
        >
          Github
        </button>
      </div>
    </div>
  );
}
