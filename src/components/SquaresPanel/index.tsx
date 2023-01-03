import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiHtml5,
  SiGit,
  SiNodedotjs,
  SiTsnode,
  SiReact,
  SiC,
} from "react-icons/si";
import Square from "../Square";
import styles from "./SquaresPanel.module.css";

const width = "200px";
const height = "200px";

export default function SquaresPanel() {
  return (
    <div className={styles.flex}>
      <Square width={width} height={height}>
        <SiC />
        <p>C</p>
      </Square>
      <Square width={width} height={height}>
        <SiHtml5 />
        <p>HTML5</p>
      </Square>
      <Square width={width} height={height}>
        <SiCss3 />
        <p>CSS3</p>
      </Square>
      <Square width={width} height={height}>
        <SiJavascript />
        <p>JavaScript</p>
      </Square>
      <Square width={width} height={height}>
        <SiTypescript />
        <p>TypeScript</p>
      </Square>
      <Square width={width} height={height}>
        <SiNodedotjs />
        <p>NodeJS</p>
      </Square>
      <Square width={width} height={height}>
        <SiTsnode />
        <p>TSNode</p>
      </Square>
      <Square width={width} height={height}>
        <SiGit />
        <p>Git</p>
      </Square>
      <Square width={width} height={height}>
        <SiReact />
        <p>React</p>
      </Square>
      <Square width={width} height={height}>
        <SiVite />
        <p>Vite</p>
      </Square>
    </div>
  );
}
