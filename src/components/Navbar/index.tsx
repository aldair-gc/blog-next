import Link from "next/link";
import { SITE_NAME } from "../../config/app-config";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>{SITE_NAME}</Link>
    </header>
  );
}
