import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Cards from "../Components/Cards";
import styles from "./UserPage.module.scss";
import Table from "../Components/Table";

const UserPage: React.FC = () => {
  return (
    <div className={styles.userPageContainer}>
      <Navbar />

      <div className={styles.userPageContentContainer}>
        <Sidebar />

        <main className={styles.userPageMainContent}>
          {/* Main content */}
          <h1>Users</h1>
          <Cards />

          <Table />
        </main>
      </div>
    </div>
  );
};

export default UserPage;
