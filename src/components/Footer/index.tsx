import { Link } from "react-router";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/about-pomodoro/">
        Understand how the Pomodoro technique works
      </Link>
      <Link to="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Alves, Vitória
      </Link>
    </footer>
  );
}
