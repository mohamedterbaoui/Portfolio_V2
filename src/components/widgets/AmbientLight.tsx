import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AmbientLight() {
  const { scrollYProgress } = useScroll();

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const isTablet = window.matchMedia("(max-width: 1024px)").matches;
  const isLaptop = window.matchMedia("(max-width: 1440px)").matches;

  const xRanges = isMobile
    ? ["-15vw", "-120vw", "30vw", "-40vw"]
    : isTablet
      ? ["20vw", "-30vw", "20vw", "-5vw"]
      : isLaptop
        ? ["20vw", "-10vw", "20vw", "4vw"]
        : ["25vw", "-10vw", "25vw", "9.5vw"];

  const yRanges = isMobile
    ? ["-15vh", "0vh", "0vh", "0vh", "10vh"]
    : isTablet
      ? ["-15vh", "10vh", "0vh", "-5vh", "10vh"]
      : isLaptop
        ? ["-15vh", "10vh", "30vh", "-10vh", "10vh"]
        : ["-15vh", "10vh", "30vh", "-10vh", "20vh"];

  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.7], xRanges);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.9, 1], yRanges);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed -z-10
                 w-150 md:w-170 aspect-square
                 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,#66FCF1_0%,#000C12_100%)]
                 opacity-8
                 "
      style={{ x, y }}
    ></motion.div>
  );
}
