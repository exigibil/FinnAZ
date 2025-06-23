import React from 'react';
import styles from './Financials.module.css'


const Financials =() => {
    return (
        <div className={styles.financialsContainer}>
            <div className={styles.financialsHeader}>
                <h1>Financials</h1>
            </div>
            <div className={styles.financialsContent}>
                <p>Financial data and insights will be displayed here.</p>
            </div>
        </div>
    )
}

export default Financials;