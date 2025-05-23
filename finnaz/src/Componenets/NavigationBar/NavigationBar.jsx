import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExchangeRate } from "../../Redux/exchangeSlice"; 
import { MdLanguage } from "react-icons/md";
import styles from "./NavigationBar.module.css";
import moment from "moment";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { US, EU } from 'country-flag-icons/react/3x2';

const NavigationBar = () => {
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState("Topa Adrian");
  const [language, setLanguage] = useState("En");

  const dispatch = useDispatch();
  const { exchangeRate, loading, error } = useSelector((state) => state.exchange);

  
  useEffect(() => {
    dispatch(fetchExchangeRate());
  }, [dispatch]);

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

        <div className={styles.bnrRate}>
          <div className={styles.rateTitleContainer}>
             <a href="https://www.bnro.ro/Cursul-de-schimb-524-Mobile.aspx" target="_blank" rel="noopener noreferrer">
            <div className={styles.rateTitle}>BNR</div>
            <div className={styles.rateDate} >
             
             
              {loading && "Loading..."}
              {error && <span style={{ color: "red" }}>Error loading rates</span>}
              {!loading && !error && exchangeRate?.date
                ? moment(exchangeRate.date).format("DD MMM YYYY")
                : null}  
            </div>

            </a>
          </div>

          <div className={styles.rateContainer}>
            <div className={styles.currencyRate}>
              <div className={styles.flagIconContainer}> <EU  className={styles.flagIcon}/></div>
             
            
              <div>{exchangeRate?.EUR ?? "-"}</div>
              <div>RON</div>
            </div>
            <span></span>
            <div className={styles.currencyRate}>
              <div className={styles.flagIconContainer}><US className={styles.flagIcon} /></div>
              <div>{exchangeRate?.USD ?? "-"}</div>
              <div>RON</div>
            </div>
          </div>
        </div>

        <div className={styles.date}>
          <HiOutlineCalendarDateRange />
          <span>{moment(date).format("DD MMMM YYYY ")}</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
