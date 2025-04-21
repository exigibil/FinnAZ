import React from "react";
import styles from "../ActiveStructure.module.css";

const Stocks = () => {
  return (
    <>
      <div className={styles.componentClass}>Stocks</div>
      <div className={styles.componentContainer}>
        <div className={styles.activeContainer}>
          <div className={styles.componentContainer}>
            <div className={styles.componentClass}>Materii Prime si materiale consumabile</div>
            <div className={styles.componentInterval}>Perioada 1</div>
            <div className={styles.componentInterval}>Perioada 2</div>
            <div className={styles.componentInterval}>Perioada 3</div>
          </div>
          <div className={styles.componentContainer}>
            <div className={styles.componentClass}>
              Productia in curs de executie
            </div>
            <div className={styles.componentInterval}>Perioada 1</div>
            <div className={styles.componentInterval}>Perioada 2</div>
            <div className={styles.componentInterval}>Perioada 3</div>
          </div>

          <div className={styles.componentContainer}>
            <div className={styles.componentClass}>Produse finite</div>
            <div className={styles.componentInterval}>Perioada 1</div>
            <div className={styles.componentInterval}>Perioada 2</div>
            <div className={styles.componentInterval}>Perioada 3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stocks;
