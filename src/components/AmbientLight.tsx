import { motion, useScroll, useTransform } from "framer-motion";

export default function AmbientLight() {
  const { scrollYProgress } = useScroll();

  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.7],
    ["25vw", "-10vw", "25vw", "9.5vw"]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.7],
    ["-15vh", "10vh", "30vh", "20vh"]
  );

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed -z-10
                 w-170 aspect-square
                 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,#66FCF1_0%,#000C12_100%)]
                 opacity-6
                 "
      style={{ x, y }}
    ></motion.div>
  );
}
