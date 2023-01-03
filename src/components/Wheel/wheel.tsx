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
  position: number;
  move: number;
  picking: boolean;
  pause: boolean;
};

export default class Wheel extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      position: 0,
      move: 0,
      picking: false,
      pause: false,
    };
  }

  cylinder(part: number, total: number) {
    return `rotateX(${-(360 / total) * part + this.state.position + this.state.move}deg) translate3d(-50%, -50%, 0px)`;
  }

  componentDidMount(): void {
    const component = document.querySelector(`.${this.props.name}`) as HTMLDivElement;
    const step = 360 / this.props.contents.length;

    component.addEventListener("wheel", (eventWheel) => {
      eventWheel.preventDefault();
      eventWheel.deltaY > 0 && this.setState({ position: this.state.position + step });
      eventWheel.deltaY < 0 && this.setState({ position: this.state.position - step });
    });

    component.addEventListener("mouseenter", () => {
      this.setState({ pause: true });
      component.addEventListener("mouseleave", () => {
        this.setState({ pause: false });
      });
    });

    setTimeout(() => {
      setInterval(() => {
        this.state.pause || this.setState({ move: this.state.move + step });
      }, 4000);
    }, 2000);

    // fix touch wheel
    // component.addEventListener("touchstart", (eventTouch) => {
    //   eventTouch.preventDefault();
    //   this.setState({ picking: true });
    //   component.addEventListener("touchmove", (eventMove) => {
    //     eventMove.preventDefault();
    //     const moving = eventTouch.touches[0].clientY - eventMove.touches[0].clientY;
    //     this.setState({ move: moving });
    //     component.addEventListener("touchend", (eventEnd) => {
    //       eventEnd.preventDefault();
    //       if (this.state.picking) {
    //         this.setState((state) => ({
    //           position: state.position + Math.round(state.move / this.props.contents.length),
    //           move: 0,
    //           picking: false,
    //         }));
    //       } else {
    //         eventEnd.stopImmediatePropagation();
    //       }
    //       this.setState({ picking: false });
    //     });
    //   });
    // });
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
            backfaceVisibility="visible"
            transition={this.state.pause ? "all linear 300ms" : "all linear 2000ms"}
          >
            <a href="/posts/page/1">{item}</a>
          </Rectangle>
        ))}
      </div>
    );
  }
}
