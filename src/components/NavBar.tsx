import React from 'react';
import Tab, { TabHeader } from './Tab';

interface NavBarProps {
  title: string;
}

export default function NavBar({ title }: NavBarProps): React.ReactElement {
  const tabHeaders: TabHeader[] = [
    { headerName: 'All', route: '/' },
    { headerName: 'My Faves', route: '/MyFaves' },
  ];

  return (
    <>
      <nav className="w-full h-28 px-8 py-8 bg-gradient-to-b from-gray-300 to-white  shadow-slate-300 shadow-md">
        <span className="text-3xl ml-16 font-[Baskerville] text-neutral-700">{title}</span>
      </nav>
      <Tab tabHeaders={tabHeaders} />
    </>
  );
}
