import logo from "../../assets/icons/logo.svg";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>SINE METU</h1>
      <img src={logo} alt="Logo" className={styles.logo} />
    </section>
  );
};

export default Hero;
