"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("About");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      style={{
        height: "100vh",
      }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p style={{marginBottom:"5rem"}}>I'm a professional Software Engineer from <strong>India </strong><br></br>During my college days I was extensively involved in Hackathons, Freelancing and Coding in general.<br></br>From working 24 hours without sleep and <strong>pitching my product in Hackathons</strong> to, <strong>Freelancing</strong> for startups to <strong>help them raise funding with MVP </strong>in a very short time to, working as a <strong>Software Engineer with the worlds biggest FinTech company</strong> to build products that impact millions of lives,<br></br>I bring diversified experiences to the table </p>
      <SectionHeading > My Weapons </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800" style={{marginTop:"3rem"}}>
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
