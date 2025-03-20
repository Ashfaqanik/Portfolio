"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";
type Props = {
  isDarkMode: boolean;
};

const Header: React.FC<Props> = ({ isDarkMode }) => {
  return (
    <div id="home" className={styles.headerContainer}>
      <Image
        src={assets.profile_img}
        alt="Profile"
        className={styles.profileImage}
      />

      <h3 className={styles.greeting}>
        Hi! I&apos;m Ashfaque <span className={styles.wavingHand}>👋</span>
      </h3>
      <h1 className={styles.heading}>Full-Stack Developer in Australia.</h1>
      <p className={styles.introText}>
        Transforming ideas into dynamic, user-centric web experiences with
        modern frontend technologies. Passionate about crafting intuitive,
        high-performance applications that merge design with functionality.
      </p>

      <div className={styles.buttonGroup}>
        <a
          href="#contact"
          className={`${styles.contactButton} ${
            isDarkMode ? styles.contactButtonDark : ""
          }`}
        >
          Get in touch
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow"
            className={styles.buttonIcon}
          />
        </a>
        <a
          href="/Resume.pdf"
          download
          className={`${styles.resumeButton} ${
            isDarkMode ? styles.resumeButtonDark : ""
          }`}
        >
          My resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className={styles.buttonIcon}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
