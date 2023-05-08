import React from "react";
import styles from "@/components/Tab/Tab.module.css";

interface TabHandler {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

interface TabsProps {
  headerTabs: string[];
  panelTabs: JSX.Element[];
  tabHandler: TabHandler;
}

export default function Tab({
  headerTabs,
  panelTabs,
  tabHandler: { activeTab, setActiveTab },
}: TabsProps): JSX.Element {
  const handleToggle = (index: number): void => {
    setActiveTab(index);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {headerTabs.map((headerTab, index) => (
          <li
            key={`tab-header-${index}`}
            className={
              activeTab === index
                ? `${styles.activeItem}`
                : `${styles.menuItem}`
            }
            onClick={() => {
              handleToggle(index);
            }}
          >
            {headerTab}
          </li>
        ))}
      </ul>
      {panelTabs.map((panelTab, index) => activeTab === index && panelTab)}
    </div>
  );
}
