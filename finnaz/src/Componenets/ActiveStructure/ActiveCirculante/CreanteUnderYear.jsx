import React from 'react';
import styles from "../ActiveStructure.module.css";

const CreanteUnderYear = () => {
    return (
        <div className={styles.componentContainer}>
            <div className={styles.componentClass}>CreanteUnderYear</div>
            <div className={styles.componentInterval}>Perioada 1</div>
            <div className={styles.componentInterval}>Perioada 2</div>
            <div className={styles.componentInterval}>Perioada 3</div>
        </div>
    );
};

export default CreanteUnderYear;