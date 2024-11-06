import React from "react";
import styles from "./UserDetailsPage.module.scss";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import BackIcon from "../assets/np_back_3007750_000000 1.png";
import UserAvatar from "../assets/user-avatar.png";

const UserDetailsPage: React.FC = () => {
  return (
    <div className={styles.userDetailsPageContainer}>
      <Navbar />

      <div className={styles.userDetailsPageContentContainer}>
        <Sidebar />

        <main className={styles.userDetailsPageMainContent}>
          {/* Main content */}
          <button className={styles.backButton}>
            <img src={BackIcon} alt="" /> Back to Users
          </button>

          <div className={styles.headerDiv}>
            <h1>User Details</h1>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
              }}
            >
              <button
                className={styles.headerButton}
                style={{
                  border: "1px solid #E4033B",
                  color: "#E4033B",
                }}
              >
                Blacklist User
              </button>
              <button
                className={styles.headerButton}
                style={{ border: "1px solid #39CDCC", color: "#39CDCC" }}
              >
                Activate User
              </button>
            </div>
          </div>
          {/* Edit here */}
          <div className={styles.userHeader}>
            <div className={styles.basicInfo}>
              <img
                src={UserAvatar}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
              <div className={styles.userName}>
                <h3>Grace Effiom</h3>
                <p>LSQFf587g90</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDetailsPage;
