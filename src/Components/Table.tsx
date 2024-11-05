import React, { useState } from "react";
import FilterIcon from "../assets/filter-results-button.png";
import MoreIcon from "../assets/ic-more-vert-18px.png";
import userData from "../../data/users.json";
import styles from "./Table.module.scss";
import ActivateUserIcon from "../assets/np_user_2995993_000000 1.png";
import BlacklistUserIcon from "../assets/np_delete-friend_3248001_000000 1.png";
import ViewUserIcon from "../assets/np_view_1214519_000000 1.png";

export const Table: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  // Toggle filter popup visibility
  const toggleFilterPopup = () => {
    setShowFilterPopup((prev) => !prev);
  };

  const [formData, setFormData] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
  };

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Filtered data:", formData);
    //Filtering logic
  };

  // Toggle popup visibility
  const togglePopup = (userId: number) => {
    setSelectedUser(userId);
    setShowPopup(!showPopup);
  };

  // Close popup when clicking outside or on an action
  const closePopup = () => {
    setShowPopup(false);
    setSelectedUser(null);
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
    <div>
      {/* Table */}
      <table className={styles.userTable}>
        <thead>
          <tr className={styles.tableHead}>
            <th className={styles.tableHeadInner}>
              <h4 className={styles.tableTitle}>ORGANIZATION</h4>
              <button
                onClick={toggleFilterPopup}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src={FilterIcon} alt="" />
              </button>
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
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => togglePopup(user.id)}
                >
                  <img src={MoreIcon} alt="" />
                </button>

                {/* Popup Menu */}
                {showPopup && selectedUser === user.id && (
                  <div className={styles.popup}>
                    <ul>
                      <li onClick={closePopup}>
                        <img
                          src={ViewUserIcon}
                          alt=""
                          className={styles.popupImage}
                        />
                        View details
                      </li>
                      <li onClick={closePopup}>
                        <img
                          src={BlacklistUserIcon}
                          alt=""
                          className={styles.popupImage}
                        />
                        Blacklist user
                      </li>
                      <li onClick={closePopup}>
                        <img
                          src={ActivateUserIcon}
                          alt=""
                          className={styles.popupImage}
                        />
                        Activate user
                      </li>
                    </ul>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Filter Form Popup */}
      {showFilterPopup && (
        <div onClick={closePopup}>
          <form
            onSubmit={handleFilter}
            className={styles.organizationFilterForm}
            onClick={(e) => e.stopPropagation()}
          >
            <label className={styles.label}>Organization</label>
            <select
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className={styles.dropdown}
              style={{ width: "255px" }}
            >
              <option value="">Select</option>
              <option value="Organization1">Organization 1</option>
              <option value="Organization2">Organization 2</option>
              <option value="Organization3">Organization 3</option>
              <option value="Organization4">Organization 4</option>
            </select>

            <label className={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              placeholder="User"
              value={formData.username}
              onChange={handleChange}
              className={styles.textInput}
            />
            <label className={styles.label}>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.textInput}
            />
            <label className={styles.label}>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={styles.dateInput}
            />
            <label className={styles.label} style={{ width: "118px" }}>
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={styles.textInput}
            />
            <label className={styles.label}>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={styles.dropdown}
              style={{ width: "255px" }}
            >
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
              <option value="blacklisted">Blacklisted</option>
            </select>
            <div className={styles.buttonContainer}>
              <button
                type="button"
                onClick={handleReset}
                className={styles.resetButton}
              >
                Reset
              </button>
              <button type="submit" className={styles.filterButton}>
                Filter
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Table;
