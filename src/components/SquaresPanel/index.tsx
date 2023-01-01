import Link from "next/link";
import { CgTemplate } from "react-icons/cg";
import Square from "../Square";
import styles from "./SquaresPanel.module.css";

export default function SquaresPanel() {
  return (
    <div className={styles.flex}>
      <Square width="500px" height="500px" background={"var(--background-strong-rgb)"}>
        <Link href={"/posts/page/1"}>
          <CgTemplate />
          <h1>One</h1>
        </Link>
      </Square>
      <Square width="500px" height="500px" background={"var(--background-strong-rgb)"}>
        <Link href={"/posts/page/1"}>
          <CgTemplate />
          <h1>Two</h1>
        </Link>
      </Square>
      <Square width="500px" height="500px" background={"var(--background-strong-rgb)"}>
        <Link href={"/posts/page/1"}>
          <CgTemplate />
          <h1>Three</h1>
        </Link>
      </Square>
      <Square width="500px" height="500px" background={"var(--background-strong-rgb)"}>
        <Link href={"/posts/page/1"}>
          <CgTemplate />
          <h1>Four</h1>
        </Link>
      </Square>
    </div>
  );
}
