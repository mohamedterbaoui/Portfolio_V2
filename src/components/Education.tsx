import { FaCalendar, FaUniversity } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      className="text-[#EEEEEE] mt-40 flex flex-col justify-center relative"
    >
      <h1 className="text-center font-heading font-semibold text-5xl">
        Education
      </h1>

      <div
        className="
        mt-6
        w-[10%]
        self-center
        h-px
        bg-linear-to-r
        from-[#66FCF1]/00
        via-[#3D968F]
        to-[#66FCF1]/00
        mb-36
      "
      ></div>

      <div
        className="
            mb-20
            transition duration-200 ease-in-out
            hover:shadow-[0_8px_4px_rgba(102,252,241,0.40)]
            shadow-[0_4px_2px_rgba(102,252,241,0.40)]
            rounded-lg
        "
      >
        {/* Card */}
        <div className="relative bg-[#011824] text-[#EEEEEE] rounded-lg px-24 pt-5 pb-8">
          {/* Overlapping heading */}
          <div className="absolute -top-6 left-24">
            <h2 className="font-heading font-bold text-5xl leading-none">
              BACHELORS
            </h2>
            <h3 className="font-heading font-bold text-2xl mt-1">
              in Computer Science
            </h3>
          </div>

          {/* Top row */}
          <div className="grid grid-cols-[3fr_2fr] items-start mb-6">
            {/* Spacer to align left column */}
            <div className=""></div>
            {/* Right meta */}
            <div className="space-y-1  font-body">
              <div className="flex gap-2 items-center">
                <FaCalendar className="text-[12px]" />
                <span className="text-sm">Jan 2023 – Dec 2025</span>
              </div>
              <div className="flex gap-2 items-center">
                <FaUniversity className="min-w-3 text-[12px]" />
                <span className="text-sm">
                  Université de Montréal, Québec, Canada
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className=" font-body">
            Bachelor's in Computer Science with a focus on software development
            fundamentals, data structures/algorithms, and databases. Built and
            tested projects that strengthened problem-solving and collaboration
            skills.
          </p>
        </div>
      </div>

      <div
        className="
            
            transition duration-200 ease-in-out
            hover:shadow-[0_8px_4px_rgba(102,252,241,0.40)]
            shadow-[0_4px_2px_rgba(102,252,241,0.40)]
            rounded-lg
        "
      >
        {/* Card */}
        <div className="relative bg-[#011824] text-[#EEEEEE] rounded-lg px-24 pt-5 pb-8">
          {/* Overlapping heading */}
          <div className="absolute -top-6 left-24">
            <h2 className="font-heading font-bold text-5xl leading-none">
              BACHELORS
            </h2>
            <h3 className="font-heading font-bold text-2xl mt-1">
              in Electronics Engineering
            </h3>
          </div>

          {/* Top row */}
          <div className="grid grid-cols-[3fr_2fr] items-start mb-6">
            {/* Spacer to align left column */}
            <div className=""></div>

            {/* Right meta */}
            <div className="space-y-1  font-body">
              <div className="flex gap-2 items-center">
                <FaCalendar className="text-[12px]" />
                <span className="text-sm">Sep 2015 – Jul 2018</span>
              </div>
              <div className="flex gap-2 items-center">
                <FaUniversity className="min-w-3 text-[12px]" />
                <span className="text-sm">
                  IGEE ex INELEC, Boumerdes, Algeria
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className=" font-body">
            Bachelor’s in Electronic Engineering focused on circuit design,
            embedded systems, and signal fundamentals, with hands-on lab work
            and prototyping. Developed and debugged hardware/firmware projects
            that strengthened analytical thinking and teamwork.
          </p>
        </div>
      </div>
    </section>
  );
}
