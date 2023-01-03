import Link from "next/link";
import styles from "./LeftMenu.module.css";

type Props = {
  show: boolean;
};

export default function LeftMenu({ show }: Props) {
  return (
    <div className={styles.container} style={{ right: show ? "0" : "-320px", opacity: show ? 1 : 0 }}>
      <ul>
        <li>
          <Link href={"/"}>First</Link>
        </li>
        <li>
          <Link href={"/"}>Second</Link>
        </li>
        <li>
          <Link href={"/"}>Third</Link>
        </li>
        <li>
          <Link href={"/"}>Fifth</Link>
        </li>
      </ul>
    </div>
  );
}
