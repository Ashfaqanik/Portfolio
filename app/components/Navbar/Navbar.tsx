"use client";
import React, { useState } from "react";
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

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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

          <button className={styles.menuBtn} onClick={toggleMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className={styles.menuIcon}
            />
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          className={`${styles.mobileMenu} ${
            isDarkMode ? styles.mobileMenuDark : ""
          } ${menuOpen ? styles.mobileMenuActive : ""}`}
        >
          {/* Close Button */}
          <div className={styles.closeBtn} onClick={toggleMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close"
              className={styles.closeIcon}
            />
          </div>

          <li>
            <a onClick={toggleMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
