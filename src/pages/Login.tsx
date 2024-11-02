import React, { useState } from "react";
import Logo from "../assets/logo.png";
import LoginHero from "../assets/pablo-sign-in 1.png";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API request
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <img src={Logo} alt="Logo" className={styles.logo} />

        <img src={LoginHero} alt="Hero image" className={styles.hImage} />
      </div>

      <div className={styles.loginRight}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <h2>Welcome!</h2>
          <p>Enter details to login</p>

          <div className={styles.formGroup}>
            <div className={styles.emailContainer}>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className={styles.showPasswordButton}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>

          <div className={styles.formActions}>
            <a href="#" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </a>
            <button type="submit" className={styles.loginButton}>
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
