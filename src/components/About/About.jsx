import AboutContent from "../AboutContent/AboutContent";
import CardsList from "../CardsList/CardsList";
import SectionHeader from "../SectionHeader/SectionHeader";

import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <SectionHeader variant="about" />
          <CardsList />
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default About;
