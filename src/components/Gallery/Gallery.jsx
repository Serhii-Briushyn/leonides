import image01 from "../../assets/images/image01.jpg";
import image02 from "../../assets/images/image02.jpg";
import image03 from "../../assets/images/image03.jpg";
import image04 from "../../assets/images/image04.jpg";

import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <section className={styles.section}>
      <ul className={styles.gridWrapper}>
        <li className={`${styles.item} ${styles.item1}`}>
          <img src={image01} alt="Spoločenské postavenie" />
          <div className={styles.overlayWrapper}>
            <div
              className={`${styles.overlay} ${styles.left} `}
              style={{ backgroundColor: "#5a75a6" }}
            ></div>
            <div
              className={`${styles.overlay} ${styles.right}`}
              style={{ backgroundColor: "#5a75a6" }}
            ></div>
            <div className={styles.overlayContent}>
              <h3 className={styles.subtitle}>ZMEŇ SVOJ ŽIVOT</h3>
              <p className={styles.text}>V SPOLOČENSKOM POSTAVENÍ</p>
            </div>
          </div>
        </li>

        <li className={`${styles.item} ${styles.item2}`}>
          <img src={image02} alt="Kariéra" />
          <div className={styles.overlayWrapper}>
            <div
              className={`${styles.overlay} ${styles.left}`}
              style={{ backgroundColor: "#6c757d" }}
            ></div>
            <div
              className={`${styles.overlay} ${styles.right}`}
              style={{ backgroundColor: "#6c757d" }}
            ></div>
            <div className={styles.overlayContent}>
              <h3 className={styles.subtitle}>ZMEŇ SVOJ ŽIVOT</h3>
              <p className={styles.text}>VO SVOJEJ KARIÉRE</p>
            </div>
          </div>
        </li>

        <li className={`${styles.item} ${styles.item3}`}>
          <img src={image03} alt="Financie" />
          <div className={styles.overlayWrapper}>
            <div
              className={`${styles.overlay} ${styles.left} `}
              style={{ backgroundColor: "#6c8b72" }}
            ></div>
            <div
              className={`${styles.overlay} ${styles.right} `}
              style={{ backgroundColor: "#6c8b72" }}
            ></div>
            <div className={styles.overlayContent}>
              <h3 className={styles.subtitle}>ZMEŇ SVOJ ŽIVOT</h3>
              <p className={styles.text}>S FINANČNOU NEZÁVISLOSŤOU</p>
            </div>
          </div>
        </li>

        <div className={`${styles.item} ${styles.item4}`}>
          <img src={image04} alt="Vzdelávanie" />
          <div className={styles.overlayWrapper}>
            <div
              className={`${styles.overlay} ${styles.left} `}
              style={{ backgroundColor: "#a66a6a" }}
            ></div>
            <div
              className={`${styles.overlay} ${styles.right} `}
              style={{ backgroundColor: "#a66a6a" }}
            ></div>
            <div className={styles.overlayContent}>
              <h3 className={styles.subtitle}>ZMEŇ SVOJ ŽIVOT</h3>
              <p className={styles.text}>VO VZDELÁVANÍ</p>
            </div>
          </div>
        </div>
      </ul>
    </section>
  );
};

export default Gallery;
