import styles from "./line.module.css";

import { Component } from "react";
import Item from "./item";

type Props = {
  name: string;
  contents: any[];
  width: string;
  height: string;
};

export default class Line extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container} style={{ height: `calc(${this.props.height} + 20px)` }}>
        <div className={styles.list + " " + this.props.name}>
          {this.props.contents.map((item, index) => (
            <Item key={index} width={this.props.width} height={this.props.height}>
              <a href="/">{item}</a>
            </Item>
          ))}
        </div>
      </div>
    );
  }
}
