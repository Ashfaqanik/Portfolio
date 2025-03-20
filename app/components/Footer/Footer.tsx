import Image from "next/image";
import styles from "./Footer.module.css";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Image
          src={isDarkMode ? "/logo_dark.png" : "/logo.png"}
          alt="Logo"
          width={160}
          height={44}
          className={styles.logo}
        />
        <div className={styles.contactInfo}>
          <Image
            src={isDarkMode ? "/mail_icon_dark.png" : "/mail_icon.png"}
            alt="Mail Icon"
            width={20}
            height={20}
          />
          <span>ashfaqanik698@gmail.com</span>
        </div>
      </div>

      <div
        className={`${styles.footerBottom} ${
          isDarkMode ? styles.footerBottomDark : ""
        }`}
      >
        <p>© 2025 Ashfaque. All rights reserved.</p>
        <ul className={styles.socialLinks}>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Ashfaqanik"
            >
              <Image
                src={`${isDarkMode ? "/github_dark.png" : "/github.png"}`}
                alt="GitHub"
                width={`${isDarkMode ? 35 : 25}`}
                height={`${isDarkMode ? 35 : 25}`}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/md-ashfaque-khan-103a22190"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={`${isDarkMode ? 34 : 28}`}
                height={`${isDarkMode ? 34 : 28}`}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
