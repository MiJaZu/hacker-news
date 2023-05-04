import React, { useState } from "react";
import styles from "@/components/Tab/Tab.module.css";

interface TabsProps {
  headerTabs: string[];
  panelTabs: JSX.Element[];
}

export default function Tab({ headerTabs, panelTabs }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);

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
      <div>
        {panelTabs.map((panelTab, index) => (
          <div key={`panel-tab-${index}`}>
            {activeTab === index && panelTab}
          </div>
        ))}
      </div>
    </div>
  );
}
