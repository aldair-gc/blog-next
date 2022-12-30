import styles from "../styles/Floating.module.css";

import { Component } from "react";
import Rectangle from "./rectangle";

type Props = {
  name: string;
  contents: any[];
  width: string;
  height: string;
};

type State = {
  floatingLeft: number;
};

export default class Floating extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      floatingLeft: 0,
    };
  }

  trailWidth = parseInt(this.props.width) * this.props.contents.length;
  trailStep = parseInt(this.props.width);

  trail(part: number, total: number) {
    return `translate3d(20px, calc(-50% + ${(this.trailWidth / total) * part + this.state.floatingLeft}%), 50px)`;
  }

  componentDidMount(): void {
    const component = document.querySelector(`.${this.props.name}`) as HTMLDivElement;

    component.addEventListener("wheel", (eventWheel) => {
      eventWheel.deltaY > 0 && this.setState({ floatingLeft: this.state.floatingLeft + this.trailStep });
      eventWheel.deltaY < 0 && this.setState({ floatingLeft: this.state.floatingLeft - this.trailStep });
    });
  }

  render() {
    return (
      <div className={styles.container + " " + this.props.name}>
        {this.props.contents.map((item, index, array) => (
          <Rectangle
            key={index}
            width={this.props.width}
            height={this.props.height}
            transform={this.trail(index, array.length)}
          >
            <a href="/">{item}</a>
          </Rectangle>
        ))}
      </div>
    );
  }
}
