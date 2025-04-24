import React from 'react';
import styles from '../ActiveStructure.module.css';

const ImobilizariFinanciare = () => {
    
    return (
       <div className={styles.imobilizariContainer}>
             <div className={styles.activeTitles}>
               Imobilizari Financiare
             </div>
       
             <div className={styles.activeContainer}>
               <div className={styles.componentContainer}>
                 <div className={styles.componentClass}>Imobilizari Financiare</div>
                 <div className={styles.componentInterval}>Perioada 1</div>
                 <div className={styles.componentInterval}>Perioada 2</div>
                 <div className={styles.componentInterval}>Perioada 3</div>
               </div>
             </div>
        </div>
    );
};

export default ImobilizariFinanciare;