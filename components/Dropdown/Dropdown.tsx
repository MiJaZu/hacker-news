import React, { ReactElement, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Dropdown.module.css";
import DropdownOption, { OptionProps } from "./DropDownOption";

interface DropdownProps {
  options: OptionProps[];
}

export default function Dropdown({ options }: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState<JSX.Element | string>(
    "Select your news"
  );
  const refDropdown = useRef<HTMLDivElement | null>(null);
  const toggleDropdown = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClick = (option: JSX.Element) => {
    setCurrent(option);
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", (event: MouseEvent) => {
      if (!refDropdown.current?.contains(event.target as Node))
        setIsOpen(false);
    });
  }, []);
  return (
    <div ref={refDropdown} className={styles.dropdown}>
      <button onClick={toggleDropdown}>
        {current}
        <FaChevronDown />
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {options.map((option: OptionProps, index: number) => (
            <DropdownOption key={index} option={option} onClick={handleClick} />
          ))}
        </div>
      )}
    </div>
  );
}
