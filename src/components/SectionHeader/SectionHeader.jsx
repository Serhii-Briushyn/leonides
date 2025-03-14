import ornamentImg from "../../assets/icons/ornament.svg";
import headerAboutImg from "../../assets/icons/header-about.svg";
import headerNeedsImg from "../../assets/icons/header-need.svg";
import headerFooterImg from "../../assets/images/header-contact.png";
import styles from "./SectionHeader.module.css";

const SectionHeader = ({ variant }) => {
  const data = {
    about: {
      title: "O SPOLOČNOSTI",
      background: headerAboutImg,
    },
    needs: {
      title: "POTREBY ĽUDÍ",
      background: headerNeedsImg,
    },
    footer: {
      title: "KONTAKT",
      background: headerFooterImg,
    },
  };

  const { title, background } = data[variant] || data["about"];

  return (
    <div
      className={`${styles.container} ${
        variant === "footer" ? styles.footerContainer : ""
      }`}
    >
      <img
        className={`${styles.background} ${
          variant === "footer" ? styles.footerBackground : ""
        }`}
        src={background}
        alt="Background Image"
      />
      <div className={styles.content}>
        <h2
          className={`${styles.title} ${
            variant === "about" ? styles.about : ""
          }`}
        >
          {title}
        </h2>
        <span className={styles.subtitle}>LEONIDES</span>
        <img className={styles.image} src={ornamentImg} alt="Ornament Image" />
      </div>
    </div>
  );
};

export default SectionHeader;
