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
      <p className={styles.description}>
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end and fullStack development.
      </p>

      <div className={styles.projectsGrid}>
        {Projects.map((project, index) => (
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src={project.bgImage}
                alt={project.title}
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.boxTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className={styles.viewProject}>
                View project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
