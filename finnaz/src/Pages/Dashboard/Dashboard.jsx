import React from "react";
import ActiveImobilizate from "../../Componenets/ActiveStructure/ActiveImobilizate/ActiveImobilizate.jsx";
import ActiveCirculante from "../../Componenets/ActiveStructure/ActiveCirculante/ActiveCirculante.jsx";
import styles from "./Dashboard.module.css";
import TotalActiv from '../../Componenets/ActiveStructure/Total Activ/TotalActiv.jsx';

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
                <p>Active Structure</p>
                </div>
                <div className={styles.dashboardComponents}>
               <div> <ActiveImobilizate /></div>
               <div> <ActiveCirculante /></div>
               <div> <TotalActiv /> </div>
                </div>
          </div>

          <div className={styles.dashboarDash}></div>

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
