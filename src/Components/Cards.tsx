import React from "react";
import UserIcon from "../assets/icon.png";
import UserIcon1 from "../assets/icon (1).png";
import UserIcon2 from "../assets/icon (2).png";
import UserIcon3 from "../assets/icon (3).png";
import styles from "./Cards.module.scss";

const Cards: React.FC = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <img src={UserIcon} alt="" className={styles.icon} />
        <p className={styles.cardTitle}>USERS</p>
        <h3 className={styles.cardValue}>2,453</h3>
      </div>

      <div className={styles.card}>
        <img src={UserIcon1} alt="" className={styles.icon} />
        <p className={styles.cardTitle}>ACTIVE USERS</p>
        <h3 className={styles.cardValue}>2,453</h3>
      </div>

      <div className={styles.card}>
        <img src={UserIcon2} alt="" className={styles.icon} />
        <p className={styles.cardTitle}>USERS WITH LOANS</p>
        <h3 className={styles.cardValue}>12,453</h3>
      </div>

      <div className={styles.card}>
        <img src={UserIcon3} alt="" className={styles.icon} />
        <p className={styles.cardTitle}>USERS WITH SAVINGS</p>
        <h3 className={styles.cardValue}>102,453</h3>
      </div>
    </div>
  );
};

export default Cards;
