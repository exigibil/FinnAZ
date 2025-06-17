import React, { useState, useEffect } from "react";
import styles from "./Currency.module.css";
import { TbPlus, TbMinus } from "react-icons/tb";

function Modal({
  onClose,
  currencies = {},
  setCurrency,
  alreadySelectedCurrencies = [],
}) {
  // Start with existing navbar currencies
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);

  useEffect(() => {
    setSelectedCurrencies([...alreadySelectedCurrencies]);
  }, [alreadySelectedCurrencies]);

  const handleAdd = (code) => {
    if (!selectedCurrencies.includes(code)) {
      setSelectedCurrencies((prev) => [...prev, code]);
    }
  };

  const handleRemove = (code) => {
    setSelectedCurrencies((prev) => prev.filter((c) => c !== code));
  };

  const handleSave = () => {
    const selectedData = selectedCurrencies.reduce((acc, code) => {
      acc[code] = currencies[code];
      return acc;
    }, {});
    setCurrency(selectedData);
    onClose();
  };

  const currencyEntries = Object.entries(currencies).filter(
    ([code]) => code !== "date"
  );

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.currencyContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.closeButtonContainer}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>

        <div className={styles.modalHeader}>Edit Currency (RON)</div>
        
         <div className={styles.modalFooter}>
          <button
            onClick={handleSave}
            disabled={selectedCurrencies.length === 0}
          >
            Save
          </button>
          </div>

        <div className={styles.modalContent}>
          {currencyEntries.length === 0 ? (
            <div className={styles.noData}>No exchange rates available.</div>
          ) : (
            currencyEntries.map(([code, value]) => {
              const isSelected = selectedCurrencies.includes(code);
              return (
                <div className={styles.currencyData} key={code}>
                  <div className={styles.currencyName}>
                    {code}: {value}
                  </div>
                  <div className={styles.currencyAddButton}>
                    <button
                      onClick={() => handleAdd(code)}
                      disabled={isSelected}
                    >
                      <TbPlus />
                    </button>
                    <button
                      onClick={() => handleRemove(code)}
                      disabled={!isSelected}
                    >
                      <TbMinus />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className={styles.modalFooter}>
          <button
            onClick={handleSave}
            disabled={selectedCurrencies.length === 0}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
