import styles from "./MainScreen.module.css";
import Dashboard from "../Dashboard/Dashboard.jsx";
import NavigationBar from "../../Componenets/NavigationBar/NavigationBar.jsx";
import React from "react";
import LeftSideMenu from "../LeftMenu/LeftSideMenu.jsx";

const MainScreen = () => {
  return (
    <div className={styles.mainScreenContainer}>
      <div>
        {" "}
        <NavigationBar />{" "}
      </div>

      <div className={styles.ContentMainContainer}>
        <div className={styles.leftMenuContainer}>
          <LeftSideMenu />
        </div>

        <div className={styles.rightMenuContainer}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
