import React from "react";
import ActiveImobilizate from "../../Componenets/ActiveStructure/ActiveImobilizate/ActiveImobilizate.jsx";
import ActiveCirculante from "../../Componenets/ActiveStructure/ActiveCirculante/ActiveCirculante.jsx";
import styles from "./Dashboard.module.css";
import TotalActiv from '../../Componenets/ActiveStructure/Total Activ/TotalActiv.jsx';

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
               <div> <ActiveImobilizate /></div>
               <div> <ActiveCirculante /></div>
               <div> <TotalActiv /> </div>
                </div>
          </div>

          <div className={styles.dashboardDash}></div>

          <div className={styles.financialsPassive}>
          <div className={styles.activeHeader}>
                <p>Pasive Structure</p>
                </div>
           
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
