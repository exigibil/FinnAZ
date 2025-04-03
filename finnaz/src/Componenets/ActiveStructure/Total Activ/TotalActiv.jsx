import React from "react";
import styles from '../Imobilizari.module.css';

const TotalActiv = () => {
  const getTotal = () => {
    const totalCirculante = 10;
    const totalImobilizate = 20;
    return totalCirculante + totalImobilizate;
  };

  return (
    <>
      <div className={styles.activeContainer}>
        <div className={styles.componentContainer}>
          <div className={styles.componentClass}>
            <h3>Total Active</h3>
            <div className={styles.componentInterval}>
              <p>{getTotal()}</p>
            </div>
            <div className={styles.componentInterval}>
              <p>{getTotal()}</p>
            </div>
            <div className={styles.componentInterval}>
              <p>{getTotal()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalActiv;
