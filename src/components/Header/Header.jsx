import { useState } from "react";
import { motion } from "framer-motion";

import Modal from "../Modal/Modal";

import menuIcon from "../../assets/icons/menu.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.header
        className={styles.header}
        animate={{ y: isModalOpen ? -100 : 0, opacity: isModalOpen ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <button className={styles.menuBtn} onClick={() => setIsModalOpen(true)}>
          <img src={menuIcon} alt="Menu" className={styles.menuIcon} />
        </button>
      </motion.header>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
