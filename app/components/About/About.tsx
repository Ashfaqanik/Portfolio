import { toolsData, techData, assets, knowledgeData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import styles from "./About.module.css";

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <div id="about" className={styles.container}>
      <h2 className={styles.mainTitle}>About me</h2>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.description}>
            I am a passionate FullStack Developer with a strong academic
            foundation and hands-on experience through personal projects. I
            specialize in building intuitive and responsive user interfaces and
            am excited to contribute as a Frontend Developer, while also
            leveraging my skills in back-end technologies to deliver complete,
            user-centric solutions.
          </p>

          <div className={styles.tools}>
            <h4 className={styles.toolsTitle}>Technologies I work with</h4>

            <ul className={styles.toolsList}>
              {techData.map((tech, index) => (
                <li key={index} className={styles.toolItem}>
                  <Image
                    src={tech.icon}
                    alt="Technology"
                    className={styles.toolIcon}
                  />
                  <span className={styles.toolName}>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.tools}>
            <h4 className={styles.toolsTitle}>Tools I use</h4>

            <ul className={styles.toolsList}>
              {toolsData.map((tool, index) => (
                <li key={index} className={styles.toolItem}>
                  <Image
                    src={tool.icon}
                    alt="Tool"
                    className={styles.toolIcon}
                  />
                  <span className={styles.toolName}>{tool.name}</span>
                </li>
              ))}
            </ul>
            <h4 className={styles.toolsTitle}>Concepts I Am Familiar With</h4>
            <ul className={styles.toolsList}>
              {knowledgeData.map((data, index) => (
                <li key={index} className={styles.toolItem}>
                  <Image
                    src={data.icon}
                    alt="Technology"
                    className={styles.toolIcon}
                  />
                  <span className={styles.toolName}>{data.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
