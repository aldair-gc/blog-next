import { useState } from "react";
import LeftMenu from "../LeftMenu";
import styles from "./Navbar.module.css";

export default function MenuIcon() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.menuIcon} onClick={toggleMenu}>
      <div className={styles.bar1 + " " + (menuOpen ? styles.open1 : styles.closed1)}></div>
      <div className={styles.bar2 + " " + (menuOpen ? styles.open2 : styles.closed2)}></div>
      <LeftMenu show={menuOpen} />
    </div>
  );
}
