import ProjectCard from "./widgets/ProjectCard";

export default function Projects() {
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

      <div className="grid grid-cols-2 gap-8">
        {/* Project Cards */}
        <ProjectCard
          name="Project 1"
          description="A project description. More details about the project go here. a bit longer to fill space. Even more text to see how it looks. Add a little more."
          technologies={["React", "TypeScript"]}
          demoLink="https://example.com/demo1"
          githubLink="https://github.com/example/project1"
        />
        <ProjectCard
          name="Project 2"
          description="Another project description."
          technologies={["Vue", "JavaScript"]}
          demoLink="https://example.com/demo2"
          githubLink="https://github.com/example/project2"
        />
        <ProjectCard
          name="Project 3"
          description="Yet another project description."
          technologies={["Angular", "TypeScript"]}
          demoLink="https://example.com/demo3"
          githubLink="https://github.com/example/project3"
        />

        <ProjectCard
          name="Project 3"
          description="Yet another project description."
          technologies={["Angular", "TypeScript"]}
          demoLink="https://example.com/demo3"
          githubLink="https://github.com/example/project3"
        />
      </div>

      <div className="text-end font-body cursor-pointer text-sm mt-6">
        Click here to see more projects →
      </div>
    </section>
  );
}
