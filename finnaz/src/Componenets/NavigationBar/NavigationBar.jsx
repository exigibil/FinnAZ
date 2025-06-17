import React, { useState, useEffect, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExchangeRate } from "../../Redux/exchangeSlice";
import { MdLanguage } from "react-icons/md";
import styles from "./NavigationBar.module.css";
import moment from "moment";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
//import { US, EU } from 'country-flag-icons/react/3x2';
import { TbCopyPlus } from "react-icons/tb";
import Modal from "../NavigationBar/CurrencyModal/CurrencyModal";
import {
  selectExchangeRates,
  selectExchangeLoading,
  selectExchangeError,
} from "../../Redux/selector";

const NavigationBar = () => {
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState("Topa Adrian");
  const [language, setLanguage] = useState("En");
 const [currency, setCurrency] = useState(() => {
  const saved = localStorage.getItem("selectedCurrencies");
  return saved ? JSON.parse(saved) : {};
});
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const stored = localStorage.getItem("selectedCurrencies");
    if (stored) {
      setCurrency(JSON.parse(stored));
    }
  }, []);

  const exchangeRate = useSelector(selectExchangeRates);
  const loading = useSelector(selectExchangeLoading);
  const error = useSelector(selectExchangeError);
  const selectedCurrencyCodes = Object.keys(currency || {});
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };
const handleSaveChanges = (updatedData) => {
  setCurrency(updatedData);
  localStorage.setItem("selectedCurrencies", JSON.stringify(updatedData));
  setShowModal(false);
};

  const handleOpenModal = () => {
    if (exchangeRate && Object.keys(exchangeRate).length > 1) {
      setShowModal(true);
    } else {
      alert("Exchange rates not available.");
    }
  };

  useEffect(() => {
    dispatch(fetchExchangeRate());
  }, [dispatch]);

  return (
    <>
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
              <a
                href="https://www.bnro.ro/Cursul-de-schimb-524-Mobile.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.rateTitle}>BNR</div>
                <div className={styles.rateDate}>
                  {loading && "Loading..."}
                  {error && (
                    <span style={{ color: "red" }}>Error loading rates</span>
                  )}
                  {!loading && !error && exchangeRate?.date
                    ? moment(exchangeRate.date).format("DD MMM YYYY")
                    : null}
                </div>
              </a>
            </div>

            <div className={styles.rateContainer}>
              {currency &&
                Object.entries(currency).map(([code, rate]) => (
                  <div className={styles.currencyRate} key={code}>
                    <div>{code}</div>
                    <div>{rate}</div>
                    <div>RON</div>
                    <div>|</div>
                  </div>
                ))}
            </div>
            <div className={styles.rateAddButton} onClick={handleOpenModal}>
              <TbCopyPlus />
            </div>
          </div>

          <div className={styles.date}>
            <HiOutlineCalendarDateRange />
            <span>{moment(date).format("DD MMMM YYYY ")}</span>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          onClose={toggleModal}
          isOpen={showModal}
          setCurrency={handleSaveChanges}
          currencies={exchangeRate}
         alreadySelectedCurrencies={selectedCurrencyCodes}
        />
      )}
    </>
  );
};

export default NavigationBar;
