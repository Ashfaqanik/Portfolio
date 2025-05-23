"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import MyProjects from "./components/MyProjects/MyProjects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About />
      <MyProjects isDarkMode={isDarkMode} />
      <Certifications isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
