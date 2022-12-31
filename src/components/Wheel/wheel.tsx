import styles from "./Wheel.module.css";

import { Component } from "react";
import Rectangle from "../Rectangle";

type Props = {
  name: string;
  contents: any[];
  width: string;
  height: string;
  radius: string;
};

type State = {
  wheelTop: number;
  wheelChange: number;
  picking: boolean;
};

export default class Wheel extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      wheelTop: 0,
      wheelChange: 0,
      picking: false,
    };
  }

  cylinder(part: number, total: number) {
    return `rotateX(${
      -(360 / total) * part + this.state.wheelTop + this.state.wheelChange
    }deg) translate3d(-50%, -50%, 50px)`;
  }

  wheelStep = 360 / this.props.contents.length;

  componentDidMount(): void {
    const component = document.querySelector(`.${this.props.name}`) as HTMLDivElement;

    component.addEventListener("wheel", (eventWheel) => {
      eventWheel.deltaY > 0 && this.setState({ wheelTop: this.state.wheelTop + this.wheelStep });
      eventWheel.deltaY < 0 && this.setState({ wheelTop: this.state.wheelTop - this.wheelStep });
    });

    // fix touch wheel
    component.addEventListener("touchstart", (eventTouch) => {
      eventTouch.preventDefault();
      this.setState({ picking: true });
      component.addEventListener("touchmove", (eventMove) => {
        eventMove.preventDefault();
        const moving = eventTouch.touches[0].clientY - eventMove.touches[0].clientY;
        this.setState({ wheelChange: moving });
        component.addEventListener("touchend", (eventEnd) => {
          eventEnd.preventDefault();
          if (this.state.picking) {
            this.setState((state) => ({
              wheelTop: state.wheelTop + Math.round(state.wheelChange / this.props.contents.length),
              wheelChange: 0,
              picking: false,
            }));
          } else {
            eventEnd.stopImmediatePropagation();
          }
          this.setState({ picking: false });
        });
      });
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
            transform={this.cylinder(index, array.length)}
            radius={this.props.radius}
          >
            <a href="/">{item}</a>
          </Rectangle>
        ))}
      </div>
    );
  }
}
