import React from "react";
import ActiveImobilizate from "../../Componenets/ActiveStructure/ActiveImobilizate/ActiveImobilizate.jsx";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <p>Welcome to the Dashboard</p>
      </div>

      <div className={styles.dashboardActivePasive}>
        <div className={styles.dashboardFinancials}>
          <div className={styles.financialsActive}>
                <div className={styles.activeHeader}>
                <h4>Active Structure</h4>
                </div>
                <div className={styles.dashboardComponents}>
                <ActiveImobilizate />
                    TODO: Active Circulante
                </div>
          </div>
          <div className={styles.financialsPassive}>
                    TODO:   Pasive structure
                    <ActiveImobilizate />
          </div>

        </div>

        <div className={styles.financialsStats}>
            TODO: Indicatori
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
