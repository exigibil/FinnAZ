import styles from "./MainScreen.module.css";
import Dashboard from "../Dashboard/Dashboard.jsx";
import NavigationBar from "../../Componenets/NavigationBar/NavigationBar.jsx";
import React from "react";
import LeftSideMenu from "../LeftMenu/LeftSideMenu.jsx";

const MainScreen = () => {
  return (
    <div className={styles.mainScreenContainer}>
      <div className={styles.ContentContainer}>
        <div className={styles.leftMenuContainer}>
          <LeftSideMenu />
        </div>

        <div className={styles.rightMenuContainer}>
          <div className={styles.userDataContainer}>
            <NavigationBar />
          </div>
          <div>
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
