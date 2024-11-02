import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import styles from "./Dashboard.module.scss";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <Sidebar />
        <main className={styles.mainContent}>
          {/* Dashboard content goes here */}
          <h1>Welcome to the Dashboard</h1>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
