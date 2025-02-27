"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import styles from "./Navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div className={styles.headerBg}>
        <Image src={assets.header_bg_color} alt="" />
      </div>
      <nav className={styles.navbar}>
        <a href="#home">
          <Image src={assets.logo} alt="Logo" className={styles.logo} />
        </a>
        <ul className={styles.navList}>
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
        <div>
          <a href="#contact" className={styles.contact}>
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              alt="contact"
              className={styles.contactImage}
            />
          </a>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
