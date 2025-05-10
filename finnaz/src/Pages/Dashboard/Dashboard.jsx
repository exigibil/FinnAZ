import React from "react";
import styles from "./Dashboard.module.css";
import ActiveData from "../../Componenets/ActiveData";
import PasiveData from "../../Componenets/PasiveData";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      

      <div className={styles.dashboardActivePasive}>
        <div className={styles.dashboardFinancials}>

          <div className={styles.financialsActive}>
                <div className={styles.activeHeader}>
                <p>Active Structure</p>
                </div>
                <div className={styles.dashboardComponents}>
               <ActiveData />
                </div>
          </div>

          

          <div className={styles.financialsPassive}>
          <div className={styles.activeHeader}>
                <p>Pasive Structure</p>
                </div>
                <div className={styles.dashboardComponents}>
               <PasiveData />
                </div>
                    
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
