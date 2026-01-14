import { HtmlIcon } from "./icons/HtmlIcon";
import { CssIcon } from "./icons/CssIcon";
import { JsIcon } from "./icons/JsIcon";
import { TsIcon } from "./icons/TsIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { PythonIcon } from "./icons/PythonIcon";
import { NodejsIcon } from "./icons/NodejsIcon";
import { DjangoIcon } from "./icons/DjangoIcon";
import { SupabaseIcon } from "./icons/SupabaseIcon";
import { PostgresIcon } from "./icons/PostgresIcon";
import { ThreejsIcon } from "./icons/ThreejsIcon";
import { GitIcon } from "./icons/GitIcon";
import { FigmaIcon } from "./icons/FigmaIcon";

export default function Skills() {
  const skills = [
    { name: "HTML5", Icon: HtmlIcon },
    { name: "CSS3", Icon: CssIcon },
    { name: "JavaScript", Icon: JsIcon },
    { name: "TypeScript", Icon: TsIcon },
    { name: "React", Icon: ReactIcon },
    { name: "TailwindCSS", Icon: TailwindIcon },
    { name: "Python", Icon: PythonIcon },
    { name: "Node.js", Icon: NodejsIcon },
    { name: "Django", Icon: DjangoIcon },
    { name: "Supabase", Icon: SupabaseIcon },
    { name: "PostgreSQL", Icon: PostgresIcon },
    { name: "Three.js", Icon: ThreejsIcon },
    { name: "Git", Icon: GitIcon },
    { name: "Figma", Icon: FigmaIcon },
  ];
  return (
    <section className="text-[#EEEEEE] mt-36 flex flex-col justify-center items-center relative">
      <h1 className="text-center font-heading font-semibold text-5xl">
        Skills
      </h1>

      <div
        className="
        mt-6
        w-[6%]
        h-px
        bg-linear-to-r
        from-[#66FCF1]/00
        via-[#3D968F]
        to-[#66FCF1]/00
        mb-6
      "
      ></div>

      <h3 className="font-body font-light">
        Skills and technologies I use on the daily
      </h3>

      <div className="w-[80%] flex gap-12 flex-wrap justify-center items-center mt-16">
        {skills.map(({ name, Icon }) => (
          <div
            key={name}
            className="group flex flex-col items-center gap-2 cursor-pointer"
          >
            <Icon className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {name}
            </span>
          </div>
        ))}
      </div>

      <div
        className="w-130 aspect-square rounded-full self-center
      absolute  -z-10
      bg-radial
      from-[#66FCF1]/3
      to-[#3D968F]/3
      blur-[100px]
      "
      ></div>
    </section>
  );
}
