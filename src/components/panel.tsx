import styles from "../styles/Panel.module.css";
import Floating from "./floating";
import Wheel from "./wheel";

export default function Panel() {
  const desktopList = ["one", "two", "three", "four", "five", "six", "seven"];
  const leftDetailsList = ["one", "two", "three", "four", "five", "six", "seven"];

  return (
    <div className={styles.container}>
      <Floating name="left-details" contents={leftDetailsList} width="200px" height="200px" />
      <Wheel name="desktop" contents={desktopList} width="450px" height="280px" />
    </div>
  );
}
