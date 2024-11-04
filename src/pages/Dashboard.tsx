import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  //Calculating page data
  // const indexOfLastRow = currentPage * rowsPerPage;
  // const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  // const currentData = userData.slice(indexOfFirstRow, indexOfLastRow);

  //Page change handler
  const totalPages = Math.ceil(userData.length / rowsPerPage);
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Affecting status
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "inactive":
        return styles.inactive;
      case "pending":
        return styles.pending;
      case "blacklisted":
        return styles.blacklisted;
      case "active":
        return styles.active;
      default:
        return "";
    }
  };

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

          <table className={styles.userTable}>
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
              {userData.map((user, index) => (
                <tr
                  key={user.id}
                  className={styles.tableBody}
                  style={{
                    borderBottom:
                      index === userData.length - 1
                        ? "none"
                        : "1px solid #213F7D1A",
                    padding: "0.75rem",
                  }}
                >
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
                  <td className={styles.tableBodyInner}>
                    <span
                      className={`${styles.status} ${getStatusClass(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
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
          </table>

          {/* Pagination */}
          <div className={styles.pagination}>
            <div className={styles.paginationInner} style={{ width: "227px" }}>
              <span>Showing</span>

              <select
                value={100} /*{currentPage}*/
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className={styles.pageDropdown}
              >
                {Array.from({ length: 100 /*totalPages*/ }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <span>
                out of {100} {/*{totalPages}*/}
              </span>
            </div>

            <div
              className={styles.paginationInner}
              style={{ width: "262px", color: "#545F7D" }}
            >
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                style={{
                  backgroundColor: "#213F7D1A",
                  color: "#213F7D",
                  alignItems: "center",
                }}
              >
                {"<"}
              </button>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <span style={{ color: "#545F7D" }}>1</span>
                <span>2</span>
                <span>3</span>
                <span>... {/* {totalPages - 1} {totalPages} */}</span>
                <span>15</span>
                <span>16</span>
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                {">"}
              </button>
            </div>
          </div>
          {/* End of pagination */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
