import React from "react";
import styles from "../ActiveStructure.module.css";

const ImobilizariCorporale = () => {
  return (
    <div className={styles.imobilizariContainer}>
      <div className={styles.activeTitles}>
         Imobilizari corporale
      </div>

      <div className={styles.activeContainer}>
        <div className={styles.componentContainer}>
          <div className={styles.componentClass}>Terenuri</div>
          <div className={styles.componentInterval}>Perioada 1</div>
          <div className={styles.componentInterval}>Perioada 2</div>
          <div className={styles.componentInterval}>Perioada 3</div>
        </div>
        <div className={styles.componentContainer}>
          <div className={styles.componentClass}>Constructii</div>
          <div className={styles.componentInterval}>Perioada 1</div>
          <div className={styles.componentInterval}>Perioada 2</div>
          <div className={styles.componentInterval}>Perioada 3</div>
        </div>

        <div className={styles.componentContainer}>
          <div className={styles.componentClass}>
            Echipamente & Transport Vehicles
          </div>
          <div className={styles.componentInterval}>Perioada 1</div>
          <div className={styles.componentInterval}>Perioada 2</div>
          <div className={styles.componentInterval}>Perioada 3</div>
        </div>

        <div className={styles.componentContainer}>
          <div className={styles.componentClass}>
            Alte active fixe corporabile
          </div>
          <div className={styles.componentInterval}> Perioada 1</div>
          <div className={styles.componentInterval}>Perioada 2</div>
          <div className={styles.componentInterval}>Perioada 3</div>
        </div>

        <div className={styles.componentContainer}>
          <div className={styles.componentClass}>
            Active in curs de executie
          </div>
          <div className={styles.componentInterval}>Perioada 1</div>
          <div className={styles.componentInterval}>Perioada 2</div>
          <div className={styles.componentInterval}>Perioada 3</div>
        </div>
      </div>
    </div>
  );
};

export default ImobilizariCorporale;
