import { useEffect } from "react";
import { motion } from "framer-motion";

import BorderedImage from "../BorderedImage/BorderedImage";
import { menuItems } from "../../constants/menuItems";

import closeIcon from "../../assets/icons/menu-rot.svg";

import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.menu}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.menuTitle}>MENU</h2>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={closeIcon} alt="Menu Close" className={styles.closeIcon} />
        </button>
        <div className={styles.contentContainer}>
          <ul className={styles.menuList}>
            {menuItems.map(({ id, text, link, imgSrc, section }) => (
              <li key={id} className={styles.menuItem}>
                <BorderedImage
                  src={imgSrc}
                  text={text}
                  link={link}
                  section={section}
                  onClose={onClose}
                />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
