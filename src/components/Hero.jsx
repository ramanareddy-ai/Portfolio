import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/hkprofile.jpeg";

const container = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay } },
});

// Edit/extend this list if you like
const ROLES = [
  "Data Scientist",
  "Generative AI Engineer",
  "MLOps Engineer",
  "LLM / RAG Specialist",
];

function useTypewriter(words, typeSpeed = 250, deleteSpeed = 100, holdMs = 2500) {
  const [index, setIndex] = useState(0);       // which word
  const [sub, setSub] = useState("");          // visible substring
  const [del, setDel] = useState(false);       // deleting mode

  useEffect(() => {
    const full = words[index];
    // choose speed
    const speed = del ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (!del) {
        // typing
        const next = full.slice(0, sub.length + 1);
        setSub(next);
        if (next === full) {
          // finished typing -> hold then start deleting
          setTimeout(() => setDel(true), holdMs);
        }
      } else {
        // deleting
        const next = full.slice(0, sub.length - 1);
        setSub(next);
        if (next.length === 0) {
          setDel(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [sub, del, index, words, typeSpeed, deleteSpeed, holdMs]);

  return sub;
}

const Hero = () => {
  const typed = useTypewriter(ROLES, 55, 35, 800);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap items-center">
        {/* left: text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-[44px] md:text-[64px] font-extralight leading-tight"
            >
              Venkata Ramana
              <br />
              Reddy Karnati
            </motion.h1>

            {/* typewriter subtitle */}
            <motion.h2
              variants={container(0.15)}
              initial="hidden"
              animate="visible"
              className="mt-4 text-3xl font-semibold"
            >
              <span className="bg-gradient-to-r from-pink-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                {typed}
              </span>
              <span className="ml-1 inline-block h-8 w-1 animate-pulse bg-violet-400 align-middle" />
            </motion.h2>

            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-neutral-300 leading-relaxed"
            >
              I build end-to-end ML systems, fine-tune LLMs, and ship production AI — from
              RAG chatbots to real-time pipelines — with measurable impact.
            </motion.p>

            <motion.div
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex gap-4 text-sm"
            >
              <a href="mailto:ramanadata568@gmail.com" className="rounded-xl border px-4 py-2">
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/ramanareddy444/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-2"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ramanareddy-ai"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-2"
              >
                GitHub
              </a>
            </motion.div>
          </div>
        </div>

        {/* right: photo */}
        <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-1/2">
          <motion.img
            className="h-72 w-72 rounded-2xl object-cover shadow-xl"
            src={profilePic}
            alt="Ramana profile"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
