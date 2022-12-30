import { Component } from "react";
import styles from "../styles/Panel.module.css";
import Rectangle from "./rectangle";

type Props = void;

type State = {
  wheelTop: number;
  wheelChange: number;
  picking: boolean;
};

export default class Panel extends Component<Props, State> {
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

  desktopList = ["one", "two", "three", "four", "five", "six", "seven"];

  componentDidMount(): void {
    const wheelDesktop = document.querySelector(".wheel") as HTMLDivElement;

    wheelDesktop.addEventListener("wheel", (eventWheel) => {
      eventWheel.deltaY > 0 && this.setState({ wheelTop: this.state.wheelTop + 1 });
      eventWheel.deltaY < 0 && this.setState({ wheelTop: this.state.wheelTop - 1 });
    });

    const addTouchAndScrool = (object: HTMLDivElement): void => {
      object.addEventListener("touchstart", (eventTouch) => {
        eventTouch.preventDefault();
        this.setState({ picking: true });
        object.addEventListener("touchmove", (eventMove) => {
          eventMove.preventDefault();
          const moving = eventTouch.touches[0].clientY - eventMove.touches[0].clientY;
          this.setState({ wheelTop: moving });
          object.addEventListener("touchend", (eventEnd) => {
            eventEnd.preventDefault();
            if (this.state.picking) {
              this.setState({ wheelTop: Math.round(this.state.wheelTop / this.desktopList.length) });
            } else {
              eventEnd.stopImmediatePropagation();
            }
            this.setState({ picking: false });
          });
        });
      });
    };

    addTouchAndScrool(wheelDesktop);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wheel + " wheel"}>
          {this.desktopList.map((desktop, index, array) => (
            <Rectangle key={index} width="400px" height="240px" transform={this.cylinder(index, array.length)}>
              <a href="/">{desktop}</a>
            </Rectangle>
          ))}
        </div>
      </div>
    );
  }
}
