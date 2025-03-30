import React from 'react';
import styles from './Imobilizari.module.css';
import ImobilizariNecorporale from './ImobilizariNecorporale.jsx';
import ImobilizariCorporale from './ImobilizariCorporale.jsx';
import ImobilizariFinanciare from './ImobilizariFinanciare.jsx';

const ActiveImobilizate = () => {
    
    return (
        <div className={styles.imobilizariContainer}>
           
            <div className={styles.activeContainer}>
                <ImobilizariNecorporale />
                <ImobilizariCorporale />
                <ImobilizariFinanciare />
            </div>

            <div className={styles.activeTotals}><h4> Total Active Imobilizate</h4></div>
        </div>
    );
};

export default ActiveImobilizate;