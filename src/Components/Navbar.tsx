import React, { useState } from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "../assets/search.png";
import Bell from "../assets/Vector.png";
import Avatar from "../assets/avatar.png";
import DropdownIcon from "../assets/np_dropdown_615120_000000 1.png";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Search for anything" />
        <button className={styles.searchButton}>
          <img src={SearchIcon} alt="Icon" />
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        ☰
      </div>

      <div className={styles.navLinks}>
        <a href="#" className={styles.docsLink}>
          Docs
        </a>

        <img src={Bell} alt="Notifications" />

        <div className={styles.userProfile}>
          <img src={Avatar} alt="User" className={styles.userImage} />
          <span className={styles.username}>Adedeji</span>
          <img src={DropdownIcon} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
