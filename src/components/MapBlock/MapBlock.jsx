import styles from "./MapBlock.module.css";

const MapBlock = () => {
  return (
    <div className={styles.mapWrapper}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.504976893293!2d21.234738276762464!3d49.00097719066105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ef29dbee1b113%3A0x6b5141d3280bfebf!2zTGV2b8SNc2vDoSA2MTE2LzUsIDA4MCAwMSBQcmXFoW92!5e0!3m2!1ssk!2ssk!4v1741899936356!5m2!1ssk!2ssk"
        className={styles.mapIframe}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Levočská 6116/5"
      ></iframe>
    </div>
  );
};

export default MapBlock;
