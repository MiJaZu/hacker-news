import styles from "@/components/NavBar/NavBar.module.css";

interface NavBarProps {
  title: string;
}

export default function NavBar({ title }: NavBarProps): JSX.Element {
  return (
    <nav>
      <span className={styles.title_style}>{title}</span>
    </nav>
  );
}
