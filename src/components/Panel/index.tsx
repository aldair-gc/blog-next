import styles from "./Panel.module.css";
import Wheel from "../Wheel/wheel";

export default function Panel() {
  const desktopList = ["one", "two", "three", "four", "five", "six", "seven"];

  return (
    <div className={styles.container}>
      <Wheel name="desktop" contents={desktopList} width="450px" height="280px" radius="-350px" />
    </div>
  );
}
