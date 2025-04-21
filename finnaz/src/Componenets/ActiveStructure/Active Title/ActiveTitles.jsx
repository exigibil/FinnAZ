import React from "react";
import styles from '../ActiveStructure.module.css';

const ClassTitles = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.TitlesContainer}>
        <div className={styles.componentClass}><h4>Class Titles</h4></div>
        <div className={styles.componentInterval}>
          <span>Luna / anul</span>
        </div>
        <div className={styles.componentInterval}>
          <span>Luna / anul</span>
        </div>
        <div className={styles.componentInterval}>
          <span>Luna / anul</span>
        </div>
      </div>
    </div>
  );
};

export default ClassTitles;
