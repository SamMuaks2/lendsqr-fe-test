import React, { useState } from "react";
import Briefcase from "../assets/briefcase 1.png";
import DropdownIcon from "../assets/np_next_2236826_000000 2.png";
import HomeIcon from "../assets/home 1.png";
import UserGroup from "../assets/user-friends 1.png";
import UserIcon from "../assets/users 1.png";
import SackIcon from "../assets/sack 1.png";
import HandShakeIcon from "../assets/handshake-regular 1.png";
import SavingsIcon from "../assets/piggy-bank 1.png";
import LoanIcon from "../assets/Group 104.png";
import WhitelistIcon from "../assets/user-check 1.png";
import KarmaIcon from "../assets/user-times 1.png";
import BankIcon from "../assets/np_bank_148501_000000 1.png";
import CoinIcon from "../assets/coins-solid 1.png";
import TransferIcon from "../assets/Transactions.png";
import ServiceIcon from "../assets/galaxy 1.png";
import ServieAccountIcon from "../assets/user-cog 1.png";
import SettlementsIcon from "../assets/scroll 1.png";
import ReportsIcon from "../assets/chart-bar 2.png";
import PreferencesIcon from "../assets/sliders-h 1.png";
import PercentageIcon from "../assets/badge-percent 1.png";
import ClipBoardIcon from "../assets/clipboard-list 1.png";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const organizations = ["Organization A", "Organization B", "Organization C"];

  return (
    <aside
      className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ""}`}
    >
      <div className={styles.sideButtonContainer}>
        <button
          className={styles.toggleSidebarBtn}
          style={{ marginLeft: "175px" }}
          onClick={toggleSidebar}
        >
          &#9776;
        </button>
      </div>

      <div className={styles.sideContainer}>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown} className={styles.switchOrg}>
            <img src={Briefcase} alt="" />
            Switch Organization
            <img src={DropdownIcon} alt="" />
          </button>
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {organizations.map((org, index) => (
                <li key={index} className={styles.dropdownItem}>
                  {org}
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className={styles.navList}>
          <li className={styles.navItem} style={{ marginBottom: "15%" }}>
            <img src={HomeIcon} alt="" />
            Dashboard
          </li>
        </ul>

        {/* Customers section */}
        <ul className={styles.navList}>
          <li
            className={styles.navItem}
            style={{
              fontStyle: "Work Sans",
              fontWeight: 500,
              fontSize: "12px",
              color: "#545F7D",
            }}
          >
            CUSTOMERS
          </li>

          <ul className={styles.subNavList}>
            <li>
              <img
                src={UserGroup}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Users
            </li>

            <li style={{ width: "95px" }}>
              <img
                src={UserIcon}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Gaurantors
            </li>

            <li style={{ width: "65px" }}>
              <img
                src={SackIcon}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Loans
            </li>

            <li style={{ width: "135px" }}>
              <img
                src={HandShakeIcon}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Decision Models
            </li>

            <li style={{ width: "75px" }}>
              <img
                src={SavingsIcon}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Savings
            </li>

            <li style={{ width: "120px" }}>
              <img
                src={LoanIcon}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Loan Requests
            </li>

            <li style={{ width: "85px" }}>
              <img
                src={WhitelistIcon}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Whitelist
            </li>

            <li style={{ width: "70px" }}>
              <img
                src={KarmaIcon}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Karma
            </li>
          </ul>

          {/* Business section */}
          <li
            className={styles.navItem}
            style={{
              fontStyle: "Work Sans",
              fontWeight: 500,
              fontSize: "12px",
              color: "#545F7D",
            }}
          >
            BUSINESSES
          </li>

          <ul className={styles.subNavList}>
            <li style={{ width: "110px" }}>
              <img
                src={Briefcase}
                alt=""
                style={{ width: "16px", height: "16px" }}
              />
              Organization
            </li>

            <li style={{ width: "120px" }}>
              <img
                src={LoanIcon}
                alt=""
                style={{ width: "18px", height: "22px" }}
              />
              Loan Products
            </li>

            <li style={{ width: "135px" }}>
              <img
                src={BankIcon}
                alt=""
                style={{ width: "16px", height: "16px" }}
              />
              Savings Products
            </li>

            <li style={{ width: "140px" }}>
              <img
                src={CoinIcon}
                alt=""
                style={{ width: "16px", height: "16px" }}
              />
              Fees and Charges
            </li>

            <li style={{ width: "105px" }}>
              <img
                src={TransferIcon}
                alt=""
                style={{ width: "16px", height: "16px" }}
              />
              Transactions
            </li>

            <li style={{ width: "80px" }}>
              <img
                src={ServiceIcon}
                alt=""
                style={{ width: "16px", height: "16px" }}
              />
              Services
            </li>

            <li style={{ width: "130px" }}>
              <img
                src={ServieAccountIcon}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Service Account
            </li>

            <li style={{ width: "100px" }}>
              <img
                src={SettlementsIcon}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Settlements
            </li>

            <li style={{ width: "75px" }}>
              <img
                src={ReportsIcon}
                alt=""
                style={{ width: "16px", height: "16px" }}
              />
              Reports
            </li>
          </ul>

          <li
            className={styles.navItem}
            style={{
              fontStyle: "Work Sans",
              fontWeight: 500,
              fontSize: "12px",
              color: "#545F7D",
            }}
          >
            SETTINGS
          </li>

          <ul className={styles.subNavList}>
            <li style={{ width: "100px" }}>
              <img
                src={PreferencesIcon}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Preferences
            </li>

            <li style={{ width: "135px" }}>
              <img
                src={PercentageIcon}
                alt=""
                style={{ width: "16px", height: "12.8px" }}
              />
              Fees and Pricing
            </li>

            <li style={{ width: "100px" }}>
              <img
                src={ClipBoardIcon}
                alt=""
                style={{ width: "16px", height: "21.33px" }}
              />
              Audit Logs
            </li>
          </ul>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
