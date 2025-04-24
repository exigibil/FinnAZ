import React, { useState } from "react";
import { MdLanguage } from "react-icons/md";
import styles from "./NavigationBar.module.css";
import moment from "moment";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

const NavigationBar = () => {
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState("Topa Adrian");
  const [language, setLanguage] = useState("En");

  return (
    <div className={styles.navigationBar}>
      <div className={styles.navigationBarLeft}>
        <div className={styles.containerUser}>
         
          <div className={styles.userName}>
            User: <span>{user}</span>
          </div>
          <div className={styles.language}>
        
            <MdLanguage />
            <span>{language}</span>
          </div>
        </div>
        <div className={styles.date}>
      
          <HiOutlineCalendarDateRange />
          <span>{moment(date).format("DD MMMM YYYY ")}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
