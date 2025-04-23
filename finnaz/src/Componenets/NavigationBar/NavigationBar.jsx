import React from "react";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
return (
    <div className={styles.navigationBar}>
      <div>
        <div>User: <span>Topa Adrian</span></div>
        <div>Language: <span>En</span></div>
        <div>Date: <span>Today</span> </div>
      </div>
       
        
      
    </div>
  );
}

export default NavigationBar;