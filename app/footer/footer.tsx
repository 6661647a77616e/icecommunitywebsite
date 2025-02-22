"use client";

import {
  AnimatePresence,
  motion,
  MotionConfig,
  Variants,
  type Transition,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoX from "@/public/x.png";
import logoLinkedIn from "@/public/linkedin.png";
import logoBehance from "@/public/behance.png";
import logoDribble from "@/public/dribble.png";

const transition: Transition = { type: "spring", bounce: 0.4, duration: 0.3 };

const Context = React.createContext<{
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}>({ status: "", setStatus: () => null });

function InnerContent() {
  const ctx = React.useContext(Context);

  const icon: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      translateX: "-50%",
      filter: "blur(2px)",
      rotate: "0deg",
    },
    show: (custom: { rotateRight: boolean }) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      rotate: custom?.rotateRight ? "3deg" : "-3deg",
    }),
    exit: {
      opacity: 0,
      y: 10,
      filter: "blur(2px)",
      rotate: "0deg",
      transition: { ...transition, duration: 0.5 },
    },
  };

  return (
    <div className="group flex items-center gap-4 text-white">
      <Link
        href="#"
        onMouseOver={() => ctx.setStatus("x")}
        onMouseOut={() => ctx.setStatus("idle")}
        className="relative transition-colors duration-300 ease-out hover:!text-purple group-hover:text-purple"
      >
        <AnimatePresence>
          {ctx.status === "x" && (
            <motion.div
              variants={icon}
              custom={{ rotateRight: true }}
              initial="hidden"
              animate="show"
              exit="exit"
              className="size-8 absolute -top-10 left-1/2 rotate-3 rounded-lg bg-black p-2 shadow-mixed"
            >
              <Image src={logoX} alt="x" className="size-full" />
            </motion.div>
          )}
        </AnimatePresence>
        <span>x</span>
      </Link>
      <Link
        href="#"
        onMouseOver={() => ctx.setStatus("behance")}
        onMouseOut={() => ctx.setStatus("idle")}
        className="relative transition-colors duration-300 ease-out hover:!text-purple group-hover:text-purple"
      >
        <AnimatePresence>
          {ctx.status === "behance" && (
            <motion.div
              variants={icon}
              initial="hidden"
              animate="show"
              exit="exit"
              className="size-8 absolute -top-10 left-1/2 -translate-x-1/2 -rotate-3 overflow-hidden rounded-lg bg-black shadow-mixed"
            >
              <Image src={logoBehance} alt="behance" className="size-full" />
            </motion.div>
          )}
        </AnimatePresence>
        <span>behance</span>
      </Link>
      <Link
        href="#"
        onMouseOver={() => ctx.setStatus("linkedin")}
        onMouseOut={() => ctx.setStatus("idle")}
        className="relative transition-colors duration-300 ease-out hover:!text-purple group-hover:text-purple"
      >
        <AnimatePresence>
          {ctx.status === "linkedin" && (
            <motion.div
              variants={icon}
              custom={{ rotateRight: true }}
              initial="hidden"
              animate="show"
              exit="exit"
              className="size-8 absolute -top-10 left-1/2 -translate-x-1/2 rotate-3 overflow-hidden rounded-lg bg-black shadow-mixed"
            >
              <Image src={logoLinkedIn} alt="linkedin" className="size-full" />
            </motion.div>
          )}
        </AnimatePresence>
        <span>linkedin</span>
      </Link>
      <Link
        href="#"
        onMouseOver={() => ctx.setStatus("dribble")}
        onMouseOut={() => ctx.setStatus("idle")}
        className="relative transition-colors duration-300 ease-out hover:!text-purple group-hover:text-purple"
      >
        <AnimatePresence>
          {ctx.status === "dribble" && (
            <motion.div
              variants={icon}
              initial="hidden"
              animate="show"
              exit="exit"
              className="size-8 absolute -top-10 left-1/2 -translate-x-1/2 -rotate-3 overflow-hidden rounded-lg bg-black shadow-mixed"
            >
              <Image src={logoDribble} alt="dribble" className="size-full" />
            </motion.div>
          )}
        </AnimatePresence>
        <span>dribble</span>
      </Link>
    </div>
  );
}

export default function Footer() {
  const [status, setStatus] = React.useState("idle");

  React.useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setStatus("idle");
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [setStatus]);

  return (
    <Context.Provider value={{ status, setStatus }}>
      <MotionConfig transition={transition}>
      <footer className="text-white relative flex w-full py-8 items-center justify-center ">
      <InnerContent />
        </footer>
      </MotionConfig>
    </Context.Provider>
  );
}


// ref https://github.com/vaunblu/lab/blob/main/src/app/tooltip-nav/page.tsx