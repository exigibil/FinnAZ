import styles from "./MainScreen.module.css";
import Dashboard from "../Dashboard/Dashboard.jsx";
import NavigationBar from "../../Componenets/NavigationBar/NavigationBar.jsx";
import LeftSideMenu from "../LeftMenu/LeftSideMenu.jsx";
import { Tabs, Tab, TabList, TabPanel } from "../../Componenets/Tabs/Tabs.jsx";
import Financials from "../Financials/Financials.jsx";

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
            <Tabs defaultIndex={0}>
              <TabList>
                <Tab index={0}>Dashboard</Tab>
                <Tab index={1}>Financials</Tab>
              </TabList>

              <TabPanel index={0}> <Dashboard /></TabPanel>
              <TabPanel index={1}><Financials /></TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
