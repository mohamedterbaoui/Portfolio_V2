import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

const githubLink = "https://github.com/mohamedterbaoui";
const linkedinLink = "https://www.linkedin.com/in/mohamedterbaoui";
const emailAddress = "mailto:m.terbaoui7@gmail.com";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home");

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const yOffset = id === "home" ? -200 : -100; // navbar height

    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (section: string) => {
    handleSectionClick(section);
    scrollToSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        width: isScrolled ? "60%" : "100%",
        top: isScrolled ? "0.5rem" : "1.5rem",
        paddingLeft: isScrolled ? "1.5rem" : "0rem",
        paddingRight: isScrolled ? "1.5rem" : "0rem",
        border: isScrolled ? "1px solid rgba(102, 252, 241, 0.2)" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mx-auto flex justify-between sticky z-50 py-4 rounded-lg backdrop-blur-xl"
    >
      <div className="flex gap-2">
        {/* Email */}
        <a
          href={emailAddress} // e.g. "mailto:you@email.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center h-5 w-5 rounded-full bg-[#808080]
               transition-colors duration-300 ease-in-out hover:bg-[#EEEEEE]"
          aria-label="Send email"
        >
          <FaEnvelope className="text-sm text-[#000C12]" />
        </a>

        {/* LinkedIn */}
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center h-5 w-5 rounded-full bg-[#808080]
               transition-colors duration-300 ease-in-out hover:bg-[#EEEEEE]"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin className="text-sm text-[#000C12]" />
        </a>

        {/* GitHub */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-xl text-[#808080]
               transition-colors duration-300 ease-in-out hover:text-[#EEEEEE]"
        >
          <FaGithub />
        </a>
      </div>

      <div>
        <ul className="flex gap-10 font-heading font-semibold text-[#C4C6C8]">
          <li
            onClick={() => handleNavClick("home")}
            className={`cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F] ${
              selectedSection === "home" ? "text-[#45A29F]" : ""
            }`}
          >
            Home
          </li>
          <li
            onClick={() => handleNavClick("education")}
            className={`cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F] ${
              selectedSection === "education" ? "text-[#45A29F]" : ""
            }`}
          >
            Education
          </li>
          <li
            onClick={() => handleNavClick("projects")}
            className={`cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F] ${
              selectedSection === "projects" ? "text-[#45A29F]" : ""
            }`}
          >
            Projects
          </li>

          <li
            onClick={() => handleNavClick("skills")}
            className={`cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F] ${
              selectedSection === "skills" ? "text-[#45A29F]" : ""
            }`}
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className={`cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F] ${
              selectedSection === "contact" ? "text-[#45A29F]" : ""
            }`}
          >
            Contact
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
