import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTimes } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { useState, useEffect } from "react";

const githubLink = "https://github.com/mohamedterbaoui";
const linkedinLink = "https://www.linkedin.com/in/mohamedterbaoui";
const emailAddress = "mailto:m.terbaoui7@gmail.com";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home");
  const [isMenuActive, setIsMenuActive] = useState(false);

  const sections = ["home", "education", "projects", "skills", "contact"];

  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(
      window.matchMedia("(max-width: 768px)").matches,
    );

    useEffect(() => {
      const media = window.matchMedia("(max-width: 768px)");
      const listener = () => setIsMobile(media.matches);

      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, []);

    return isMobile;
  };

  const isMobile = useIsMobile();

  const useIsLaptop = () => {
    const [isLaptop, setIsLaptop] = useState(
      window.matchMedia("(max-width: 1440px)").matches,
    );

    useEffect(() => {
      const media = window.matchMedia("(max-width: 1440px)");
      const listener = () => setIsLaptop(media.matches);

      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, []);

    return isLaptop;
  };

  const isLaptop = useIsLaptop();

  // Scroll to a section smoothly when clicking nav item
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const yOffset = id === "home" ? -200 : -100; // adjust for sticky navbar

    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (section: string) => {
    setSelectedSection(section);
    scrollToSection(section);
  };

  // Scroll spy + navbar shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Shrink navbar
      setIsScrolled(window.scrollY > 50);

      // Scroll spy
      const scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport

      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setSelectedSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        width: isScrolled
          ? isMobile
            ? "100%"
            : isLaptop
              ? "80%"
              : "60%"
          : "100%",
        top: isScrolled ? "0.5rem" : "1.5rem",
        paddingLeft: isScrolled ? "1.5rem" : "0rem",
        paddingRight: isScrolled ? "1.5rem" : "0rem",
        border: isScrolled ? "1px solid rgba(102, 252, 241, 0.2)" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mx-auto sticky z-50 py-4 rounded-lg backdrop-blur-xl"
    >
      <div className="flex justify-between">
        <div className="flex gap-2">
          {/* Email */}
          <a
            href={emailAddress}
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
          <ul className="hidden lg:flex gap-10 font-heading font-semibold text-[#C4C6C8]">
            {sections.map((section) => (
              <li
                key={section}
                onClick={() => handleNavClick(section)}
                className={`cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F] ${
                  selectedSection === section ? "text-[#45A29F]" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
          <div className="lg:hidden text-white cursor-pointer">
            {!isMenuActive ? (
              <HiOutlineMenu
                className="text-xl text-[#EEEEEE]"
                onClick={() => {
                  setIsMenuActive(true);
                }}
              />
            ) : (
              <div
                onClick={() => setIsMenuActive(false)}
                className="
                          text-[#66FCF1] hover:text-[#46ddd3] text-xl cursor-pointer
                          hover:scale-[1.15] transition-transform duration-300 ease-in-out
                        "
              >
                <FaTimes />
              </div>
            )}
          </div>
        </div>
      </div>
      {isMenuActive && (
        <ul
          className="      
          absolute
          right-0
          top-full
          z-50
          mt-4
          flex
          flex-col
          gap-6
          font-heading
          font-semibold
          text-[#EEEEEE]
          text-right
          backdrop-blur-xl
          rounded-lg
          p-6
          border
          border-[#66FCF1]/20"
        >
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => {
                handleNavClick(section);
                setIsMenuActive(false);
              }}
              className={`cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#45A29F] ${
                selectedSection === section ? "text-[#45A29F]" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}
