import BottomInfo from "../BottomInfo/BottomInfo";
import ContactsBlock from "../ContactsBlock/ContactsBlock";
import FormBlock from "../FormBlock/FormBlock";
import MapBlock from "../MapBlock/MapBlock";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.circles}></div>
      <MapBlock />
      <div className={styles.container}>
        <SectionHeader variant="footer" />
        <ContactsBlock />
        <FormBlock />
        <BottomInfo />
      </div>
    </footer>
  );
};

export default Footer;
