import React from "react";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <button className={styles.switchOrg}>Switch Organization</button>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Dashboard</li>
        <li className={styles.navItem}>Customers</li>
        <ul className={styles.subNavList}>
          <li>Users</li>
          <li>Guarantors</li>
          <li>Loans</li>
          <li>Decision Models</li>
          <li>Savings</li>
          <li>Loan Requests</li>
        </ul>
      </ul>
    </aside>
  );
};

export default Sidebar;
