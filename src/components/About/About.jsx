import AboutContent from "../AboutContent/AboutContent";
import CardsList from "../CardsList/CardsList";

import ornament from "../../assets/icons/ornament.svg";

import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>O SPOLOČNOSTI</h2>
            <span className={styles.subtitle}>LEONIDES</span>
            <img className={styles.ornament} src={ornament} alt="Ornament" />
          </div>
          <CardsList />
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default About;
