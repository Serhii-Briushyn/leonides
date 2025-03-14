import logo from "../../assets/icons/logo-head.svg";
import ornament from "../../assets/icons/ornament.svg";

import styles from "./BottomInfo.module.css";

const BottomInfo = () => (
  <div className={styles.bottom}>
    <img src={logo} alt="Leonides Logo" className={styles.logo} />
    <img src={ornament} alt="Ornament" className={styles.ornament} />
    <div>
      <p className={styles.copyright}>Copyright 2016</p>
      <p className={styles.rights}>Všetky práva vyhradené.</p>
    </div>
  </div>
);

export default BottomInfo;
