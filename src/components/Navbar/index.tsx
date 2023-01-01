import Link from "next/link";
import { SITE_NAME } from "../../config/app-config";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <h1>{SITE_NAME}</h1>
      </Link>
      <h1>Menu</h1>
    </header>
  );
}
