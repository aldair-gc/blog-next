import Bar from "../Bar";
import styles from "./styles.module.css";

export default function Bars() {
  const desktopList = [
    { content: "one", top: "50px", left: "50px" },
    { content: "two", top: "70px", left: "50px" },
    { content: "three", top: "20px", left: "50px" },
    { content: "four", top: "90px", left: "50px" },
    { content: "five", top: "35px", left: "50px" },
    { content: "six", top: "60px", left: "50px" },
    { content: "seven", top: "10px", left: "50px" },
  ];

  return (
    <div className={styles.container}>
      {desktopList.map((item, index) => (
        <Bar key={index} width={"200px"} height={"500px"} top={item.top} left={`${index * 200}px`}>
          <a href="/">{item.content}</a>
        </Bar>
      ))}
    </div>
  );
}
