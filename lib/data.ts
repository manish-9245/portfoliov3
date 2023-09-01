import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projectone from "@/public/project-one.png";
import projecttwo from "@/public/project-two.png";
import projectthree from "@/public/project-three.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Summer Intern",
    location: "@ JPMorgan Chase, Bangalore (2 Months)",
    description:
      "Got the oppurtunity to work on Chase.com website, where my task was to modernize and internationalize microfrontends. I got a chance to present in the web channels global conference for my work and received an FTE offer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Freelance Front-End Developer",
    location: "@Musechain, London",
    description:
      "I worked as a front-end developer for this NFT marketplace startup, where my task was to build the MVP in a very short time since the funding round was close.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Software Engineer Attachment Intern",
    location: "@ JPMorgan Chase, Bangalore (6 Months)",
    description:
      "Got a chance to work with SRE team and build a proof of concept for a new product that could help reduce toil caused while monitoring App Healths. I also had the oppurtunity to  work with Transaction Reporting System team that deals with Trade processing worth billions of dollars everyday! I improved the UI/UX of Trade Manager by reducing number of clicks and making it more user friendly. My work got appreciated by business heads.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Software Engineer 1",
    location: "@ JPMorgan Chase, Bangalore (Present)",
    description:
      "Working as a Full-Stack developer solving problems faced in processing billions of dollars of transactions everyday.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "CodeSnip",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: projectone,
  },
  {
    title: "CollabCode",
    description:
      "Real-time online collaborative code editor designed specifically for pair programming, enabling seamless collaboration.",
    tags: ["Web Socket", "React", "Javascript", "HTML", "CSS", "Node"],
    imageUrl: projecttwo,
  },
  {
    title: "PythonnDS",
    description:
      "Developed a comprehensive Python package, to fulfill diverse Data Structure requirements. Common Data Structures like Linked List, Stack, Queue, etc can be implemented in 1-2 lines of code.",
    tags: ["Twine", "Python"],
    imageUrl: projectthree,
  },
] as const;

export const skillsData = [
  "HTML",
  "C++",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Streamlit",
  "Java",
  "Spring Boot"
] as const;
