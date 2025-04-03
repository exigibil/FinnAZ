import React from 'react';
import styles from "../Imobilizari.module.css";

const ExpensesInAdvance = () => {
    return (
        <div className={styles.componentContainer}>
            <div className={styles.componentClass}>ExpensesInAdvance</div>
            <div className={styles.componentInterval}>Perioada 1</div>
            <div className={styles.componentInterval}>Perioada 2</div>
            <div className={styles.componentInterval}>Perioada 3</div>
        </div>
    );
};

export default ExpensesInAdvance;