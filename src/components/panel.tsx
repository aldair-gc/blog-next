import styles from "../styles/Panel.module.css";
import Rectangle from "./rectangle";

function cylinder(part: number, total: number) {
  return `rotateX(${(360 / total) * part}deg) translate3d(-50%, -50%, 0)`;
}

export default function Panel() {
  const desktopList = ["one", "two", "three", "four", "five", "six", "seven"];
  return (
    <div className={styles.container}>
      {desktopList.map((desktop, index, array) => (
        <Rectangle key={index} width="400px" height="240px" transform={cylinder(index + 1, array.length)}>
          <a href="/">{desktop}</a>
        </Rectangle>
      ))}
    </div>
  );
}
