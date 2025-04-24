import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../ActiveStructure.module.css";

const ClassTitles = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.componentContainer}>
      <div className={styles.titlesContainer}>
        <div className={styles.componentClass}>
          <h4>Time frame</h4>
        </div>
        <div className={styles.componentInterval}>
          <DatePicker
          className={styles.datePicker}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className={styles.componentInterval}>
          <DatePicker
          className={styles.datePicker}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className={styles.componentInterval}>
          <DatePicker
          className={styles.datePicker}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default ClassTitles;
