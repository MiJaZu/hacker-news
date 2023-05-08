import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Dropdown.module.css";

export interface DropDownOption {
  id: number;
  imageUrl: string;
  label: string;
  query: string;
}

interface DropdownProps {
  options: DropDownOption[];
}

export default function Dropdown({ options }: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown}>
        <label>Select your news</label>
        <FaChevronDown />
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {options.map((option: DropDownOption) => (
            <div className={styles.option} key={option.id}>
              <img src={option.imageUrl} alt={option.label} />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
