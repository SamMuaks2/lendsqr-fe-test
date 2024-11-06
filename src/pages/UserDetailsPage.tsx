import React from "react";
import styles from "./UserDetailsPage.module.scss";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import BackIcon from "../assets/np_back_3007750_000000 1.png";
import UserAvatar from "../assets/user-avatar.png";
import UserStar from "../assets/np_star_1208084_000000 1.png";
import UserStarBlank from "../assets/np_star_1171151_000000 1.png";
import Tabs from "../Components/Tabs";

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

          <div className={styles.userHeader}>
            <div className={styles.basicInfo}>
              <img
                src={UserAvatar}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  top: "320px",
                  left: "373px",
                  marginRight: "5%",
                }}
              />
              <div className={styles.userName}>
                <h3>Grace Effiom</h3>
                <p>LSQFf587g90</p>
              </div>

              <hr />

              <div className={styles.tier}>
                <p>User’s Tier</p>
                <div style={{ flexDirection: "row", paddingTop: "1.75rem" }}>
                  <img src={UserStar} alt="" />
                  <img src={UserStarBlank} alt="" />
                  <img src={UserStarBlank} alt="" />
                </div>
              </div>

              <hr />

              <div className={styles.customerAccount}>
                <h3 className={styles.price}>₦200,000.00</h3>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>

            <Tabs />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDetailsPage;
