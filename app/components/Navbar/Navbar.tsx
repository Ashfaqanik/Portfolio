"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import styles from "./Navbar.module.css";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<Props> = ({ isDarkMode, setIsDarkMode }) => {
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <a href="#home">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className={isDarkMode ? styles.darkLogo : styles.logo}
          />
        </a>
        <ul
          className={`${styles.navList} ${
            isDarkMode ? styles.navListDark : ""
          }`}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <div className={styles.toggle}>
          <button onClick={toggleDarkMode} className={styles.themeToggleBtn}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              className={styles.toggleIcon}
            />
          </button>

          <a
            href="#contact"
            className={`${styles.contact} ${
              isDarkMode ? styles.contactDark : ""
            }`}
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow"
              className={styles.contactImage}
            />
          </a>

          <button className={styles.menuBtn}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className={styles.menuIcon}
            />
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
