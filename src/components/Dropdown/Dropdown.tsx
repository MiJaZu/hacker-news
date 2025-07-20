'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FilterContext, useFilterData } from '@/context/FilterContext';
import { FaChevronDown } from 'react-icons/fa';
// import styles from "./Dropdown.module.css";
import DropdownOption, { OptionProps } from './DropDownOption';

interface DropdownProps {
  options: OptionProps[];
}

export default function Dropdown({ options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState<React.ReactNode | string>('Select your news');
  const { filter, updateFilterData } = useFilterData();

  const refDropdown = useRef<HTMLDivElement | null>(null);
  const toggleDropdown = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClick = (option: React.ReactNode, label: string) => {
    setCurrent(option);
    updateFilterData({ ...filter, tech: label });
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', (event: MouseEvent) => {
      if (!refDropdown.current?.contains(event.target as Node)) setIsOpen(false);
    });
  }, []);
  return (
    <div
      ref={refDropdown}
      className="w-60 h-8 mt-12 rounded-sm border-2 border-solid border-zinc-800"
    >
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center border-none w-full h-full rounded-sm bg-white p-2"
      >
        {current}
        <FaChevronDown />
      </button>
      {isOpen && (
        <div className="mx-[1px] my-0 p-[5px] absolute w-60 h-36 shadow-md bg-white z-10">
          {options.map((option: OptionProps, index: number) => (
            <DropdownOption key={index} option={option} onClick={handleClick} />
          ))}
        </div>
      )}
    </div>
  );
}
