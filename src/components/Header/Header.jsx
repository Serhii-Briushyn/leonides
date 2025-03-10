/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import menuIcon from "../../assets/icons/menu.svg";
import Modal from "../Modal/Modal";
import { motion } from "framer-motion";

const sections = ["O1", "O2", "O3", "O4", "O5", "O6"];

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll("section");
      let currentSection = "";

      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={styles.header}
        animate={{ y: isModalOpen ? -100 : 0, opacity: isModalOpen ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {sections.slice(0, 3).map((section) => (
              <li
                key={section}
                className={`${styles.navItem} ${
                  activeSection === section ? styles.active : ""
                }`}
              >
                {section}
              </li>
            ))}

            <li
              className={styles.menuItem}
              onClick={() => setIsModalOpen(true)}
            >
              <div className={styles.menuText}>
                <span>M</span>
                <span>E</span>
                <span>N</span>
                <span>U</span>
              </div>
              <img src={menuIcon} alt="Menu" className={styles.menuIcon} />
            </li>

            {sections.slice(3).map((section) => (
              <li
                key={section}
                className={`${styles.navItem} ${
                  activeSection === section ? styles.active : ""
                }`}
              >
                {section}
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
