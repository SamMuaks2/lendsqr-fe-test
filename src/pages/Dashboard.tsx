import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import UserIcon from "../assets/icon.png";
import UserIcon1 from "../assets/icon (1).png";
import UserIcon2 from "../assets/icon (2).png";
import UserIcon3 from "../assets/icon (3).png";
import FilterIcon from "../assets/filter-results-button.png";
import MoreIcon from "../assets/ic-more-vert-18px.png";
import userData from "../../data/users.json";
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

          <div className={styles.userTable}>
            <thead>
              <tr className={styles.tableHead}>
                <th className={styles.tableHeadInner}>
                  <h4 className={styles.tableTitle}>ORGANIZATION</h4>
                  <a href="#">
                    <img src={FilterIcon} alt="" />
                  </a>
                </th>

                <th className={styles.tableHeadInner}>
                  <h4 className={styles.tableTitle}>USERNAME</h4>
                  <a href="#">
                    <img src={FilterIcon} alt="" />
                  </a>
                </th>

                <th className={styles.tableHeadInner}>
                  <h4 className={styles.tableTitle}>EMAIL</h4>
                  <a href="#">
                    <img src={FilterIcon} alt="" />
                  </a>
                </th>

                <th
                  className={styles.tableHeadInner}
                  style={{ width: "124px" }}
                >
                  <h4 className={styles.tableTitle}>PHONE NUMBER</h4>
                  <a href="#">
                    <img src={FilterIcon} alt="" />
                  </a>
                </th>

                <th
                  className={styles.tableHeadInner}
                  style={{ width: "154px" }}
                >
                  <h4 className={styles.tableTitle}>DATE JOINED</h4>
                  <a href="#">
                    <img src={FilterIcon} alt="" />
                  </a>
                </th>

                <th className={styles.tableHeadInner}>
                  <h4 className={styles.tableTitle}>STATUS</h4>
                  <a href="#">
                    <img src={FilterIcon} alt="" />
                  </a>
                </th>
              </tr>
            </thead>

            {/* Table data */}
            <tbody>
              {userData.map((user) => (
                <tr key={user.id} className={styles.tableBody}>
                  <td className={styles.tableBodyInner}>{user.organization}</td>
                  <td className={styles.tableBodyInner}>{user.userName}</td>
                  <td className={styles.tableBodyInner}>{user.email}</td>
                  <td className={styles.tableBodyInner}>{user.phoneNumber}</td>
                  <td
                    className={styles.tableBodyInner}
                    style={{ width: "154px" }}
                  >
                    {user.dateJoined}
                  </td>
                  <td className={styles.tableBodyInner}>{user.status}</td>
                  <td
                    className={styles.tableBodyInner}
                    style={{
                      width: "20px",
                      marginRight: "-50px",
                      marginLeft: "15px",
                    }}
                  >
                    <img src={MoreIcon} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
