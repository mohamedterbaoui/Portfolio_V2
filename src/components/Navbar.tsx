import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar flex justify-between sticky">
      <div className="flex gap-2">
        <div className=" cursor-pointer flex justify-center items-center h-5 w-5 rounded-full bg-[#808080]   transition-colors duration-300 ease-in-out hover:bg-[#EEEEEE] ">
          <FaEnvelope className="text-sm text-[#000C12]" />
        </div>
        <div className="cursor-pointer  flex justify-center items-center h-5 w-5 rounded-full bg-[#808080] transition-colors duration-300 ease-in-out hover:bg-[#EEEEEE]">
          <FaLinkedin className="text-sm text-[#000C12]" />
        </div>
        <FaGithub className="cursor-pointer text-xl text-[#808080] transition-colors duration-300 ease-in-out hover:text-[#EEEEEE]" />
      </div>
      <div>
        <ul className="flex gap-10 font-heading font-semibold text-[#C4C6C8] ">
          <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F]">
            Home
          </li>
          <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F]">
            Projects
          </li>
          <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F]">
            Education
          </li>
          <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F]">
            Skills
          </li>
          <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F]">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
