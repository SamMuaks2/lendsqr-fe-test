import React from "react";
import styles from "./UserDetailsPage.module.scss";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const UserDetailsPage: React.FC = () => {
  return (
    <div className={styles.userDetailsPageContainer}>
      <Navbar />

      <div className={styles.userDetailsPageContentContainer}>
        <Sidebar />

        <main className={styles.userDetailsPageMainContent}>
          {/* Main content */}
          <h1>Users</h1>
        </main>
      </div>
    </div>
  );
};

export default UserDetailsPage;
