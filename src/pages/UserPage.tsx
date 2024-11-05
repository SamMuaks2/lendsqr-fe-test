import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Cards from "../Components/Cards";
import styles from "./UserPage.module.scss";
import Table from "../Components/Table";

const UserPage: React.FC = () => {
  
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

          {/* Mini form */}
          <form onSubmit={handleFilter} className={styles.filterForm}>
            <div>
              <label>Organization</label>
            </div>
            <div>
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
            </div>

            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="User"
              value={formData.username}
              onChange={handleChange}
              className={styles.textInput}
            />

            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.textInput}
            />

            <label>Date</label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
              className={styles.dateInput}
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={styles.textInput}
            />

            <label>Status</label>
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
        </main>
      </div>
    </div>
  );
};

export default UserPage;
