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
    ["-10vh", "10vh", "30vh", "20vh"]
  );

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed -z-10
                 w-170 aspect-square rounded-full
                 bg-radial from-[#66FCF1]/3 to-[#3D968F]/3
                 blur-[60px]"
      style={{ x, y }}
    />
  );
}
