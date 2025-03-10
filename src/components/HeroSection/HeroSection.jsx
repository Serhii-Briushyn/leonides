import styles from "./HeroSection.module.css";
import logo from "../../assets/icons/logo.svg";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>SINE METU</h1>
      <img src={logo} alt="Logo" className={styles.logo} />
    </div>
  );
};

export default HeroSection;
