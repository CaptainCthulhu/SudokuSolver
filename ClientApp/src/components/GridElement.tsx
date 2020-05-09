import React, { Component } from "react";

interface Props {
  xLocation: number;
  yLocation: number;
  value: number;
}

interface State {
  value: number;
}

export default class GridElement extends Component<Props, State> {
  render() {
    return (
      <div>
       {this.state.value}
      </div>
    );
  }

  constructor(props: Props) {
    super(props);
    this.state = { value: this.props.value };
  }
}
