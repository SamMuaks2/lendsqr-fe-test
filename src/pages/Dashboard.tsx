import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import userData from "../../data/users.json";
import styles from "./Dashboard.module.scss";
import Cards from "../Components/Cards";
import Table from "../Components/Table";

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
