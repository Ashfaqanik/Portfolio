import { assets, Projects } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import styles from "./MyProjects.module.css"; // Importing the CSS file

interface MyProjectsProps {
  isDarkMode: boolean;
}

const MyProjects: React.FC<MyProjectsProps> = ({ isDarkMode }) => {
  return (
    <div id="projects" className={styles.projectsContainer}>
      <h2 className={styles.title}>My latest works</h2>
      <p
        className={`${
          isDarkMode ? styles.descriptionDark : styles.description
        }`}
      >
        Welcome to my development portfolio! Explore a collection of projects
        showcasing my expertise in front-end and fullStack development.
      </p>

      <div className={styles.projectsGrid}>
        {Projects.map((project, index) => (
          <div
            key={index}
            className={`${isDarkMode ? styles.card : styles.cardLight}`}
          >
            <div className={styles.imageContainer}>
              <Image
                src={project.bgImage}
                alt={project.title}
                width={400}
                height={350}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.boxTitle}>{project.title}</h3>
              <p
                className={`${
                  isDarkMode
                    ? styles.projectDescription
                    : styles.projectDescriptionLight
                }`}
              >
                {project.description}
              </p>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.cardFooter}>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode ? styles.viewProject : styles.viewProjectLight
                }`}
              >
                View project →
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubIcon}
              >
                <Image
                  src={assets.github}
                  alt="GitHub"
                  width={24}
                  height={24}
                />
                <span className={styles.tooltip}>View on Github</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
