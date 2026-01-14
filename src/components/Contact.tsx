import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";

// Separate component for the animated card
const AnimatedContactCard = ({
  icon: Icon,
  label,
}: {
  icon: any;
  label: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!cardRef.current || !isHovered) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = cardRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options = {
      times,
      duration: 6,
      repeat: Infinity,
      ease: "linear" as const,
      repeatType: "loop" as const,
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [isHovered, xPercentage, yPercentage]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex-1 flex flex-col justify-center items-center
                 bg-[#011824] rounded-lg py-8 px-12 cursor-pointer
                 group border border-[#66FCF1]/20"
    >
      {/* Animated border */}
      {isHovered && (
        <motion.div
          style={{ maskImage }}
          className="absolute inset-0 -m-px rounded-lg border-2 border-[#66FCF1]/80"
        />
      )}

      <Icon className="w-12 h-12 text-[#66FCF1] group-hover:animate-lift relative z-10" />
      <p className="mt-2 font-body text-xl font-semibold relative z-10">
        {label}
      </p>
    </div>
  );
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="text-[#EEEEEE] mt-36 flex flex-col justify-center items-center relative"
    >
      <h1 className="text-center font-heading font-semibold text-5xl">
        Get in touch
      </h1>

      <div
        className="
        mt-6
        w-[10%]
        h-px
        bg-linear-to-r
        from-[#66FCF1]/00
        via-[#3D968F]
        to-[#66FCF1]/00
        mb-6
      "
      ></div>

      <h3 className="font-body font-light text-center">
        I'd love to hear from you!
        <br />
        feel free to reach out through any of these platforms.
      </h3>

      <div className="w-full flex gap-8 justify-around items-center mt-16 mb-32">
        <AnimatedContactCard icon={FaEnvelope} label="Email" />
        <AnimatedContactCard icon={FaLinkedinIn} label="LinkedIn" />
        <AnimatedContactCard icon={FaGithub} label="GitHub" />
      </div>

      <div
        className="flex gap-2 justify-center items-center font-body cursor-pointer
       text-[#EEEEEE]/80 hover:text-[#EEEEEE] transition duration-300 mb-16"
      >
        <p className="text-md">Designed and built by Mohamed Terbaoui</p>
        <FaGithub />
      </div>
    </section>
  );
}
