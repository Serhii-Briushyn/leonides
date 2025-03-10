import styles from "./BorderedImage.module.css";

const BorderedImage = ({ src, text, link, section }) => {
  return (
    <a href={link} className={styles.link}>
      <div className={styles.wrapper}>
        <img src={src} alt={text} className={styles.image} />
        <span className={styles.borderInner}></span>
        <span className={styles.borderMiddle}></span>
        <span className={styles.borderOuterWrapper}>
          <span className={styles.borderOuter}></span>
        </span>
      </div>
      <div className={styles.content}>
        <span className={styles.section}>{section}</span>
        <div className={styles.separator}></div>
        <p className={styles.text}>{text}</p>
      </div>
    </a>
  );
};

export default BorderedImage;
