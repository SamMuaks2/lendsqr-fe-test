import React, { useState } from "react";
import styles from "./Tabs.module.scss";
import GeneralDetails from "./GeneralDetails";

type TabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: "10px 20px",
        cursor: "pointer",
        backgroundColor: isActive ? "#fff" : "#fff",
        color: isActive ? "#39CDCC" : "#000",
        border: "none",
        borderBottom: isActive ? "2px solid #39CDCC" : "2px solid transparent",
        outline: "none",
      }}
    >
      {label}
    </button>
  );
};

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("General Details");

  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  return (
    <div className={styles.tabContainer}>
      <div
        style={{
          display: "flex",
          width: "100%",
          borderBottom: "1px solid #ddd",
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <div className={styles.activeTab}>
        {/* Content for each tab */}
        {activeTab === "General Details" && <GeneralDetails />}
        {activeTab === "Documents" && <div> </div>}
        {activeTab === "Bank Details" && <div> </div>}
        {activeTab === "Loans" && <div> </div>}
        {activeTab === "Savings" && <div> </div>}
        {activeTab === "App and System" && <div> </div>}
      </div>
    </div>
  );
};

export default Tabs;
