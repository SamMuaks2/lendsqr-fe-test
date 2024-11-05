import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import styles from "./Dashboard.module.scss";
import Cards from "../Components/Cards";
import Table from "../Components/Table";
import { Pagination } from "../Components/Pagination";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Navbar />

      <div className={styles.contentContainer}>
        <Sidebar />

        <main className={styles.mainContent}>
          {/* Dashboard content */}
          <h1>Users</h1>

          <Cards />

          <Table />

          <Pagination />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
