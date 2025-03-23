import type { StaticImageData } from "next/image";
import profile_img from "./profile_img.png";
import vscode from "./vscode.png";
import react from "./react-js.png";
import node from "./nodejs.png";
import github from "./github.png";
import tailwind from "./tailwind.png";
import typescript from "./typescript.png";
import sass from "./sass.png";
import css from "./css.png";
import docker from "./docker.png";
import oop from "./oop.png";
import kubernetes from "./kubernetes.png";
import microservice from "./microservice.png";
import nextJs from "./nextjs.png";
import cicd from "./cicd.png";
import git from "./git.png";
import postgres from "./postgres.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import download_icon from "./download-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export interface Assets {
  profile_img: StaticImageData;
  vscode: StaticImageData;
  react: StaticImageData;
  node: StaticImageData;
  typescript: StaticImageData;
  tailwind: StaticImageData;
  sass: StaticImageData;
  css: StaticImageData;
  nextJs: StaticImageData;
  cicd: StaticImageData;
  docker: StaticImageData;
  oop: StaticImageData;
  kubernetes: StaticImageData;
  microservice: StaticImageData;
  git: StaticImageData;
  postgres: StaticImageData;
  mongodb: StaticImageData;
  right_arrow_white: StaticImageData;
  logo: StaticImageData;
  github: StaticImageData;
  logo_dark: StaticImageData;
  download_icon: StaticImageData;
  header_bg_color: StaticImageData;
  moon_icon: StaticImageData;
  sun_icon: StaticImageData;
  arrow_icon: StaticImageData;
  arrow_icon_dark: StaticImageData;
  menu_black: StaticImageData;
  menu_white: StaticImageData;
  close_black: StaticImageData;
  close_white: StaticImageData;
  web_icon: StaticImageData;
  mobile_icon: StaticImageData;
  ui_icon: StaticImageData;
  right_arrow: StaticImageData;
  send_icon: StaticImageData;
  right_arrow_bold: StaticImageData;
  right_arrow_bold_dark: StaticImageData;
}

export const assets: Assets = {
  profile_img,
  react,
  node,
  typescript,
  tailwind,
  sass,
  css,
  kubernetes,
  microservice,
  nextJs,
  docker,
  oop,
  cicd,
  vscode,
  git,
  postgres,
  mongodb,
  right_arrow_white,
  logo,
  github,
  logo_dark,
  download_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export interface Projects {
  title: string;
  description: string;
  bgImage: string;
  tags: string[];
  projectLink: string;
  githubLink: string;
}

export const Projects: Projects[] = [
  {
    title: "Ashfaque TaskNest",
    description: "A Task Management Web App to deal with project tasks",
    bgImage: "/project-1.png",
    tags: [
      "ReactJs",
      "Redux Toolkit",
      "Context API",
      "Typescript",
      "NodeJs",
      "PostgreSql",
      "SASS",
    ],
    projectLink: "https://ashfaque-tasknest.onrender.com",
    githubLink: "https://github.com/Ashfaqanik/Ashfaque-TaskNest",
  },
  {
    title: "BookBazaar",
    description: "An E-commerce book selling Web App ",
    bgImage: "/project-2.png",
    tags: ["MERN", "Redux", "Tailwind CSS", "Online Payment"],
    projectLink: "https://bookbazaar-e-commerce.onrender.com",
    githubLink: "https://github.com/Ashfaqanik/Ashfaque-TaskNest",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio",
    bgImage: "/project-3.png",
    tags: ["NextJS", "CSS", "Typescript"],
    projectLink: "https://portfolio-ashfaqaniks-projects.vercel.app/",
    githubLink: "https://github.com/Ashfaqanik/Portfolio",
  },
];
interface TechItem {
  icon: StaticImageData;
  name: string;
}
interface Certification {
  title: string;
  image: string;
  issuedBy: string;
  date: string;
}

export const certifications: Certification[] = [
  {
    title: "Full Stack Application Development Capstone Project",
    image: "/capstone.png",
    issuedBy: "IBM",
    date: "Jul 2024",
  },
  {
    title: "Get Started with Cloud Native, DevOps, Agile, and NoSQL",
    image: "/cdan.png",
    issuedBy: "IBM",
    date: "May 2024",
  },
  {
    title: "Application Development using Microservices and Serverless",
    image: "/microservice.png",
    issuedBy: "IBM",
    date: "Jul 2024",
  },
  {
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    image: "/container.png",
    issuedBy: "IBM",
    date: "Jul 2024",
  },
  {
    title: "Developing Front-End Apps with React",
    image: "/frontend.png",
    issuedBy: "IBM",
    date: "Jun 2024",
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    image: "/backend.png",
    issuedBy: "IBM",
    date: "Jun 2024",
  },
  {
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    image: "/javascript.png",
    issuedBy: "IBM",
    date: "Jun 2024",
  },
];

export const toolsData: TechItem[] = [
  { icon: assets.vscode, name: "Visual Studio" },
  { icon: assets.mongodb, name: "MongoDB" },
  { icon: assets.git, name: "Git" },
  { icon: assets.postgres, name: "PostgreSQL" },
];
export const techData: TechItem[] = [
  { icon: assets.react, name: "ReactJs" },
  { icon: assets.node, name: "Node.JS" },
  { icon: assets.typescript, name: "TypeScript" },
  { icon: assets.css, name: "CSS" },
  { icon: assets.tailwind, name: "Tailwind CSS" },
  { icon: assets.sass, name: "SASS" },
  { icon: assets.nextJs, name: "Next.JS" },
];
export const knowledgeData: TechItem[] = [
  { icon: assets.docker, name: "Docker" },
  { icon: assets.kubernetes, name: "Kubernetes" },
  { icon: assets.microservice, name: "Microservices Architecture" },
  { icon: assets.cicd, name: "CI/CD with Github Actions" },
  { icon: assets.oop, name: "Object Oriented Programming" },
];
