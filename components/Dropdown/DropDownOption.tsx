import { useEffect } from "react";
import styles from "./Dropdown.module.css";

export type OptionProps = {
  imgUrl: string;
  label: string;
  query: string;
};

type DropdownOptionProps = {
  option: OptionProps;
  onClick(option: JSX.Element): void;
};

export default function DropdownOption({
  option: { imgUrl, label },
  onClick,
}: DropdownOptionProps) {
  const optionJSX = (
    <div className={styles.option}>
      {imgUrl && <img src={imgUrl} alt={label} />}
      <span>{label}</span>
    </div>
  );

  return (
    <div
      onClick={() => onClick(optionJSX)}
      className={styles.option}
      key={`drop-down-${label}-${imgUrl}`}
    >
      {imgUrl && <img src={imgUrl} alt={label} />}
      <span>{label}</span>
    </div>
  );
}
