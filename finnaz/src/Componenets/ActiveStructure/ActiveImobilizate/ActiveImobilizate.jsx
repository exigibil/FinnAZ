import React from 'react';
import styles from "../ActiveStructure.module.css";
import ImobilizariNecorporale from './ImobilizariNecorporale.jsx';
import ImobilizariCorporale from './ImobilizariCorporale.jsx';
import ImobilizariFinanciare from './ImobilizariFinanciare.jsx';
import ClassTitles from '../Active Title/ActiveTitles.jsx';

const ActiveImobilizate = () => {
    
    return (
        <div className={styles.imobilizariContainer}>
           
            <div className={styles.activeContainer}>
                <ClassTitles />
                <ImobilizariNecorporale />
                <ImobilizariCorporale />
                <ImobilizariFinanciare />
            </div>

            <div className={styles.activeTotals}>
                <div className={styles.activeContainer}>
                        <div className={styles.componentContainer}>
                          <div className={styles.componentClass}>  <h4> Total Active Imobilizate</h4></div>
                          <div className={styles.componentInterval}>Perioada 1</div>
                          <div className={styles.componentInterval}>Perioada 2</div>
                          <div className={styles.componentInterval}>Perioada 3</div>
                        </div>

                    </div>
                
                   
                    
                </div>
        </div>
    );
};

export default ActiveImobilizate;