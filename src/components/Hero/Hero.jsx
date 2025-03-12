import logo from "../../assets/icons/logo.svg";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>SINE METU</h1>
      <img src={logo} alt="Logo" className={styles.logo} />
    </div>
  );
};

export default Hero;
