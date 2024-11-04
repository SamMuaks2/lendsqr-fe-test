import React from "react";
import FilterIcon from "../assets/filter-results-button.png";
import MoreIcon from "../assets/ic-more-vert-18px.png";
import userData from "../../data/users.json";
import styles from "./Table.module.scss";

export const Table: React.FC = () => {
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
    <div>
      {/* Table */}
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

            <th className={styles.tableHeadInner} style={{ width: "134px" }}>
              <h4 className={styles.tableTitle}>PHONE NUMBER</h4>
              <a href="#">
                <img src={FilterIcon} alt="" />
              </a>
            </th>

            <th className={styles.tableHeadInner} style={{ width: "154px" }}>
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
              <td className={styles.tableBodyInner} style={{ width: "154px" }}>
                {user.dateJoined}
              </td>
              <td className={styles.tableBodyInner}>
                <span
                  className={`${styles.status} ${getStatusClass(user.status)}`}
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
    </div>
  );
};

export default Table;
