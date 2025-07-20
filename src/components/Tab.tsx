'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export interface TabHeader {
  headerName: string;
  route: string;
}

interface TabsProps {
  tabHeaders: TabHeader[];
}

interface TagItemProps {
  i: number;
  activeTab: number;
  tabItemTitle: string;
  handleClick: () => void;
}

function TabItem({ i, activeTab, tabItemTitle, handleClick }: TagItemProps) {
  const activeStyle = () =>
    activeTab === i
      ? 'styles.activeItem text-sky-500 border-2 border-sky-500 '
      : `styles.menuItem border-2 border-zinc-300`;

  return (
    <li
      className={`${activeStyle()} min-w-24 min-h-4 rounded-[2px] text-center text-lg font-medium hover:cursor-pointer hover:select-none hover:opacity-[0.7]`}
      onClick={handleClick}
    >
      {tabItemTitle}
    </li>
  );
}

export default function Tab({ tabHeaders }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const router = useRouter();
  return (
    <div className="flex flex-row justify-center items-center mt-16">
      <ul className="{styles.menu} list-none p-0 flex bg-zinc-50">
        {tabHeaders.map(({ headerName, route }: TabHeader, i) => (
          <TabItem
            key={`tab-header-${i}`}
            i={i}
            activeTab={activeTab}
            tabItemTitle={headerName}
            handleClick={() => {
              setActiveTab(i);
              router.push(route);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
