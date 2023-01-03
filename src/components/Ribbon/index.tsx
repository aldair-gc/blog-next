import styles from "./ribbon.module.css";

import { Component } from "react";
import Item from "./item";

type Props = {
  name: string;
  contents: any[];
  width: string;
  height: string;
};

type State = {
  move: number;
  pause: boolean;
};

export default class Ribbon extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      move: 0,
      pause: false,
    };
  }

  position(part: number, total: number) {
    const position = (-360 / total) * part + this.state.move;
    return `rotateY(${position}deg) translate3D(-50%, -50%, 0)`;
  }

  componentDidMount(): void {
    const component = document.querySelector(`.${this.props.name}`) as HTMLDivElement;
    const step = 360 / this.props.contents.length;

    component.addEventListener("wheel", (eventWheel) => {
      eventWheel.preventDefault();
      eventWheel.deltaY > 0 && this.setState({ move: this.state.move + step });
      eventWheel.deltaY < 0 && this.setState({ move: this.state.move - step });
    });

    component.addEventListener("mouseenter", () => {
      this.setState({ pause: true });
      component.addEventListener("mouseleave", () => {
        this.setState({ pause: false });
      });
    });

    setTimeout(() => {
      this.setState({ pause: false });
      setInterval(() => {
        this.state.pause || this.setState({ move: this.state.move + step });
      }, 4000);
    }, 2000);
  }

  render() {
    return (
      <div className={styles.container} style={{ height: `calc(${this.props.height} + 20px)` }}>
        <div className={styles.ribbon + " " + this.props.name}>
          {this.props.contents.map((item, index, array) => (
            <Item
              key={index}
              width={this.props.width}
              height={this.props.height}
              transform={this.position(index, array.length)}
              radius={"-50vw"}
              backfaceVisibility="hidden"
              transition={this.state.pause ? "all linear 300ms" : "all linear 2000ms"}
            >
              <a href="/">{item}</a>
            </Item>
          ))}
        </div>
      </div>
    );
  }
}
