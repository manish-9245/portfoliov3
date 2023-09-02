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
      <p style={{marginBottom:"5rem"}}><strong>I am a seasoned Software Engineer from India</strong> with extensive experience in <strong>Hackathons</strong>, <strong>Freelancing</strong>, and <strong>Software Development</strong>. Throughout my college years, I thrived in the high-pressure environment of <strong>Hackathons</strong>, coding non-stop for 24 hours and pitching winning products. In the freelance world, I excelled at rapidly developing <strong>MVPs</strong> for startups, helping secure vital funding. Additionally, I've contributed to one of the world's largest <strong>FinTech companies</strong>, working on impactful products that touch millions of lives. My diverse experiences bring a broad skill set and problem-solving ability to any project.</p>
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
