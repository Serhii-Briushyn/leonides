import styles from "./ContactsBlock.module.css";

const ContactsBlock = () => (
  <div className={styles.contacts}>
    <p>
      <span>ADRESA</span> LEVOČSKÁ 5, PREŠOV, 080 01
    </p>
    <p>
      <span>TELEFÓN</span> +421 905 181 972
    </p>
    <p>
      <span>MESTO</span> PREŠOV / SLOVAKIA
    </p>
  </div>
);

export default ContactsBlock;
