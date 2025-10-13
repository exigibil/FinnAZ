import { TabsProvider, useTabs } from "./TabsContext";
import style from "./Tabs.module.css";

export const Tabs = ({ children, defaultIndex }) => {
  return <TabsProvider defaultIndex={defaultIndex}>{children}</TabsProvider>;
};

export const TabList = ({ children }) => {
  return <div className={style.tabList}>{children}</div>;
};

export const Tab = ({ index, children }) => {
  const { activeTab, setActiveTab } = useTabs();

  return (
    <div className={style.financialButtonsContainer}>
      <div
        className={`tab ${activeTab === index ? "active" : ""} ${style.financialButtons}`}
        onClick={() => setActiveTab(index)}
      >
        {children}
      </div>
    </div>
  );
};
export const TabPanel = ({ index, children }) => {
  const { activeTab } = useTabs();

  return activeTab === index ? (
    <div className="tab-panel" style={{ height: '100%', width: '100%' }}>{children}</div>
  ) : null;
};
