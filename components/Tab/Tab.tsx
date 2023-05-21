import React, { useState } from "react";
import styles from "@/components/Tab/Tab.module.css";
import { useRouter } from "next/navigation";

export type TabHeader = {
  headerName: string;
  route: string;
};

type TabsProps = {
  tabHeaders: TabHeader[];
};

export default function Tab({ tabHeaders }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {tabHeaders.map(({ headerName, route }: TabHeader, index) => (
          <li
            key={`tab-header-${index}`}
            className={
              activeTab === index
                ? `${styles.activeItem}`
                : `${styles.menuItem}`
            }
            onClick={() => {
              setActiveTab(index);
              router.push(route);
            }}
          >
            {headerName}
          </li>
        ))}
      </ul>
      {/* {panelTabs.map((panelTab, index) => activeTab === index && panelTab)} */}
    </div>
  );
}
