import React, { useState } from "react";
import styles from "./LeftSideMenu.module.css";
import { RxRows, RxBackpack, RxChevronDown } from "react-icons/rx";

const LeftSideMenu = () => {
  const [openDropdowns, setOpenDropdowns] = useState({
    legalPerson1: false,
    legalPerson2: false,
  });

  const [menuDropdown, setMenuDropdown] = useState({
    Menu1: false,
    Menu2: false,
    Menu3: false,
  });

  const menuBurgerIcon = () => {
    setMenuDropdown((prev) => ({
      ...prev,
      Menu1: !prev.Menu1,
      Menu2: !prev.Menu2,
      Menu3: !prev.Menu3,
    }));
    if (menuDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const toggleDropdown = (person) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [person]: !prev[person],
    }));
  };

  return (
    <div className={styles.leftMenuContainer}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuIcon}>
          <RxRows
            onClick={() => menuBurgerIcon("Menu")}
            style={{ cursor: "pointer" }}
          />
          {menuDropdown.Menu1 && (
            <div className={styles.menuDropdown}>
              <div className={styles.menuItem}>
                <a>Menu 1</a>
              </div>
              <div className={styles.menuItem}>Menu 2</div>
              <div className={styles.menuItem}>Menu 3</div>
            </div>
          )}
        </div>

        <div className={styles.leftMenuHeader}>
          <div className={styles.mainMenu}>
            <h2>Main</h2>
          </div>

          <div className={styles.legalPersonContainer}>
            <div className={styles.legalPersonBox}>
              {/* Legal Person 1 */}
              <div className={styles.legalPerson}>
                <div
                  className={styles.legalPersonTitleBox}
                  onClick={() => toggleDropdown("legalPerson1")}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.legalPersonIcon}>
                    <RxBackpack />
                  </div>
                  <div className={styles.legalPersonTitle}>Legal Person 1</div>
                  <div
                    className={`${styles.legalPersonIcon} ${
                      openDropdowns.legalPerson1 ? styles.chevronOpen : ""
                    }`}
                  >
                    <RxChevronDown />
                  </div>
                </div>
                {openDropdowns.legalPerson1 && (
                  <div className={styles.legalPersonInfo}>
                    <p>Finance</p>
                    <p>Data</p>
                  </div>
                )}
              </div>

              {/* Legal Person 2 */}
              <div className={styles.legalPerson}>
                <div
                  className={styles.legalPersonTitleBox}
                  onClick={() => toggleDropdown("legalPerson2")}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.legalPersonIcon}>
                    <RxBackpack />
                  </div>
                  <div className={styles.legalPersonTitle}>Legal Person 2</div>
                  <div
                    className={`${styles.legalPersonIcon} ${
                      openDropdowns.legalPerson2 ? styles.chevronOpen : ""
                    }`}
                  >
                    <RxChevronDown />
                  </div>
                </div>
                {openDropdowns.legalPerson2 && (
                  <div className={styles.legalPersonInfo}>
                    <p>Finance</p>
                    <p>Data</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.leftMenuHeaderSubtitle}>
            <h3>Verify</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
