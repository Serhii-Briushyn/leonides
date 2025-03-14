import styles from "./BorderedImage.module.css";

const BorderedImage = ({ src, alt, variant, onHover }) => {
  const isModal = variant === "modal";
  const isNeeds = variant === "needs";

  return (
    <div
      className={`${styles.wrapper} ${
        isModal ? styles.wrapperModal : isNeeds ? styles.wrapperNeeds : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <img src={src} alt={alt} className={styles.image} />

      <span
        className={`${styles.borderInner} ${
          isModal
            ? styles.borderInnerModal
            : isNeeds
            ? styles.borderInnerNeeds
            : ""
        }`}
      ></span>

      {isModal && <span className={styles.borderMiddle}></span>}

      <span
        className={`${styles.borderOuterWrapper} ${
          isModal
            ? styles.borderOuterWrapperModal
            : isNeeds
            ? styles.borderOuterWrapperNeeds
            : ""
        }`}
      >
        <span
          className={`${styles.borderOuter} ${
            isModal
              ? styles.borderOuterModal
              : isNeeds
              ? styles.borderOuterNeeds
              : ""
          }`}
        ></span>
      </span>
    </div>
  );
};

export default BorderedImage;
