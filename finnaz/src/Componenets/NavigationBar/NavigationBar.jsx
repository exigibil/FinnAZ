import React from "react";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
return (
    <div className={styles.navigationBar}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default NavigationBar;