import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import UserIcon from "../assets/icon.png";
import UserIcon1 from "../assets/icon (1).png";
import UserIcon2 from "../assets/icon (2).png";
import UserIcon3 from "../assets/icon (3).png";
import styles from "./Dashboard.module.scss";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Navbar />

      <div className={styles.contentContainer}>
        <Sidebar />

        <main className={styles.mainContent}>
          {/* Dashboard content */}
          <h1>Users</h1>

          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <img
                src={UserIcon}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16.42px",
                  color: "#545F7D",
                }}
              >
                USERS
              </p>
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "28.15px",
                  color: "#213F7D",
                }}
              >
                2,453
              </h3>
            </div>

            <div className={styles.card}>
              <img
                src={UserIcon1}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16.42px",
                  color: "#545F7D",
                }}
              >
                ACTIVE USERS
              </p>
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "28.15px",
                  color: "#213F7D",
                }}
              >
                2,453
              </h3>
            </div>

            <div className={styles.card}>
              <img
                src={UserIcon2}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16.42px",
                  color: "#545F7D",
                }}
              >
                USERS WITH LOANS
              </p>
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "28.15px",
                  color: "#213F7D",
                }}
              >
                12,453
              </h3>
            </div>

            <div className={styles.card}>
              <img
                src={UserIcon3}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16.42px",
                  color: "#545F7D",
                }}
              >
                USERS WITH SAVINGS
              </p>
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "28.15px",
                  color: "#213F7D",
                }}
              >
                102,453
              </h3>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
