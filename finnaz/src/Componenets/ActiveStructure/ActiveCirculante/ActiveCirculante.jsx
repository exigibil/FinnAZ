import React from 'react';
import styles from "../ActiveStructure.module.css";
import MoneyBankAccounts from './MoneyBankAccounts.jsx';
import Stocks from './Stocks.jsx';
import CreanteOverYear from './CreanteOverYear.jsx';
import CreanteUnderYear from './CreanteUnderYear.jsx';
import LowTermInvestments from './LowTermInvestments.jsx';
import ExpensesInAdvance from './ExpensesInAdvance.jsx';


const ActiveCirculante = () => {
    
    return (
        <div className={styles.imobilizariContainer}>
        
            <div className={styles.activeContainer}>
            <div className={styles.titleClass}>Active Circulante</div>
                <Stocks />
                <MoneyBankAccounts />
                <CreanteOverYear />
                <CreanteUnderYear />
                <LowTermInvestments />
                <ExpensesInAdvance />
                 
           TODO: css style on title
            </div>

            <div className={styles.activeTotals}>
                <div className={styles.activeContainer}>
                        <div className={styles.componentContainer}>
                          <div className={styles.componentClass}>  <h4> Total Active Circulante</h4></div>
                          <div className={styles.componentInterval}>Perioada 1</div>
                          <div className={styles.componentInterval}>Perioada 2</div>
                          <div className={styles.componentInterval}>Perioada 3</div>
                        </div>

                    </div>
                
                   
                    
                </div>
        </div>
    );
};

export default ActiveCirculante;