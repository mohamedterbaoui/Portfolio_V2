import { FaFileDownload } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section flex flex-col justify-start  mt-12 md:mt-16 lg:mt-24 2xl:mt-28 text-[#EEEEEE]  relative"
    >
      <h2
        className="text-xl md:text-2xl lg:text-3xl 
        bg-linear-to-r 
      from-[#45A29F]
      to-[#035653]
      bg-clip-text
      text-transparent
      font-semibold font-heading
      mb-1"
      >
        FullStack Developer
      </h2>
      <h1
        className="text-3xl md:text-5xl lg:text-6xl bg-linear-to-r 
      from-[#66FCF1]
      to-[#3D968F]
      bg-clip-text
      text-transparent
      font-semibold mb-4 md:mb-6 font-heading"
      >
        Mohamed Terbaoui
      </h1>
      <div className="flex gap-1 items-center text-[#C4C6C8] mb-8 md:mb-12">
        <span>
          <MdLocationPin className="text-xs md:text-sm text-[#C4C6C8]" />
        </span>{" "}
        Montreal, Canada
      </div>

      <p className="font-body w-[90%] md:w-[80%] lg:w-[70%] 2xl:w-[60%] text-md md:text-xl mb-10  md:mb-12">
        Full-stack developer working mainly on web applications, with an
        interest in UI and practical design.
      </p>

      <button
        className="w-fit mt-4 border border-[#45A29F] text-[#45A29F] px-6 py-2 rounded-md 
      hover:bg-[#3a8a87] hover:text-[#EEEEEE] transition-colors duration-300 ease-in-out
      flex items-center justify-center gap-4 font-heading font-semibold text-sm
      cursor-pointer group"
        onClick={() =>
          window.open("/documents/Mohamed_Terbaoui_resume.pdf", "_blank")
        }
      >
        <span>
          <FaFileDownload className="group-hover:animate-bounce" />
        </span>{" "}
        Download Resume
      </button>
      <div
        className="
        mt-20 md:mt-30
        w-[90%]
        self-center
        h-px
        bg-linear-to-r
        from-[#66FCF1]/00
        via-[#3D968F]
        to-[#66FCF1]/00
      "
      ></div>
    </section>
  );
}
