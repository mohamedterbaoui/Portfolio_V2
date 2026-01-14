import { FaFileDownload } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function Hero() {
  return (
    <section className="hero-section flex flex-col justify-start mt-28 text-[#EEEEEE]  relative">
      <h2
        className="text-3xl 
        bg-linear-to-r 
      from-[#45A29F]
      to-[#035653]
      bg-clip-text
      text-transparent
      font-semibold font-heading"
      >
        FullStack Developer
      </h2>
      <h1
        className="text-6xl bg-linear-to-r 
      from-[#66FCF1]
      to-[#3D968F]
      bg-clip-text
      text-transparent
      font-semibold mb-5 font-heading"
      >
        Mohamed Terbaoui
      </h1>
      <div className="flex gap-1 items-center text-[#C4C6C8] mb-12">
        <span>
          <MdLocationPin className="text-sm text-[#C4C6C8]" />
        </span>{" "}
        Montreal, Canada
      </div>

      <p className="font-body w-[45%] text-xl mb-12">
        Full-stack developer working mainly on web applications, with an
        interest in UI and practical design.
      </p>

      <button
        className="w-fit mt-4 border border-[#45A29F] text-[#45A29F] px-6 py-2 rounded-md 
      hover:bg-[#3a8a87] hover:text-[#EEEEEE] transition-colors duration-300 ease-in-out
      flex items-center justify-center gap-4 font-heading font-semibold text-sm"
      >
        <span>
          <FaFileDownload />
        </span>{" "}
        Download Resume
      </button>
      <div
        className="
        mt-30
        w-[90%]
        self-center
        h-px
        bg-linear-to-r
        from-[#66FCF1]/00
        via-[#3D968F]
        to-[#66FCF1]/00
      "
      ></div>
      <div
        className="w-170 aspect-square rounded-full
      absolute -top-80 -right-10 -z-10
      bg-radial
      from-[#66FCF1]/3
      to-[#3D968F]/3
      blur-[50px]
      "
      ></div>
    </section>
  );
}
