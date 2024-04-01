import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import profileImg from "@/public/portfolio.png";
import dungeonImg from "@/public/dungeon_mania.png";
import teamsImg from "@/public/team_communication.png";
import ecommerceImg from "@/public/ecommerce.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
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
    title: "Academic Tutor",
    location: "The King’s School",
    description:
      "Provided personalized guidance and improved student understanding of course material, contributing to overall grade improvement",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Development Intern",
    location: "ABC Capital Group Ltd",
    description:
      "Redesigned the company's main web page using WordPress, React and MongoDB, increasing visual appeal and improving user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Sydney, AU",
    description:
      "I'm now learning to be a full-stack developer. My stack includes React, Next.js, TypeScript and Tailwind. I'm open to part-time and internship opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Team Communication App",
    description:
      "Developed a robust communication platform (backend server) with TypeScript and Express server. (With AI chatbot)",
    tags: ["TypeScript", "Express", "MongoDB", "Jest", "AI"],
    imageUrl: teamsImg,
    onClick: () => {},
  },
  {
    title: "Full-Stack Ecommerce Store",
    description:
      "Built a full-stack e-commerce store and management dashboard from scratch using modern tech stacks, including Next.js, React, and PrismaDB.",
    tags: ["Next.js", "PrismaDB", "React", "TypeScript", "Tailwind", "Stripe"],
    imageUrl: ecommerceImg,
    onClick: () => {
      window.location.href = "https://ecommerce-store-eight-ashen.vercel.app/";
    },
  },
  {
    title: "Dungeon Mania",
    description:
      "Dungeon Mania is a game in which players maneuver a character through various dungeons to achieve specific objectives.",
    tags: ["Java", "Object-Oriented Design"],
    imageUrl: dungeonImg,
    onClick: () => {},
  },

  {
    title: "Personal Profile Website",
    description:
      "Desgined personal profile website using Next.js, TypeScript and Tailwind.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: profileImg,
    onClick: () => {},
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "Rust",
  "C",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Jest",
  "Tailwind",
  "MongoDB",
  "PrismaDB",
  "PostgreSQL",
  "Framer Motion",
  "Native Mandarin Speaker",
] as const;
