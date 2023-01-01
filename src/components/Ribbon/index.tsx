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
};

export default class Ribbon extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      move: 0,
    };
  }

  position(part: number, total: number) {
    const position = (-360 / total) * part + this.state.move;
    return `rotateY(${position}deg) translate3D(-50%, -50%, 0)`;
  }

  componentDidMount(): void {
    const component = document.querySelector(`.${this.props.name}`) as HTMLDivElement;

    component.addEventListener("wheel", (eventWheel) => {
      eventWheel.preventDefault();
      eventWheel.deltaY > 0 && this.setState({ move: this.state.move + 1 });
      eventWheel.deltaY < 0 && this.setState({ move: this.state.move - 1 });
    });

    setInterval(() => this.setState({ move: this.state.move + 1 }), 500);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.ribbon + " " + this.props.name}>
          {this.props.contents.map((item, index, array) => (
            <Item
              key={index}
              width={this.props.width}
              height={this.props.height}
              transform={this.position(index, array.length)}
              radius={"-50vw"}
              backfaceVisibility="hidden"
            >
              <a href="/">{item}</a>
            </Item>
          ))}
        </div>
      </div>
    );
  }
}
