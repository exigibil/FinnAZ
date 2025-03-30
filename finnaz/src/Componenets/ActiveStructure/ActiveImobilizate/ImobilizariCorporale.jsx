import React from 'react';
import styles from './Imobilizari.module.css';

const ImobilizariCorporale = () => {
    
    return (
        <div className={styles.imobilizariContainer}>
           <div className={styles.activeTitles}><h4> Imobilizari corporale</h4></div>
            
            <div className={styles.activeContainer}>
                <div>Terenuri</div>
                <div>Constructii</div>
                <div>Echipamente si Mijloace de Transport</div>
                <div>Alte active fixe corporabile</div>
                <div>Active in curs de executie</div>
            </div>
        </div>
    );
};

export default ImobilizariCorporale;