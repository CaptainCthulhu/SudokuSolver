import React, * as react from "react";

interface Props {
  xLocation: number;
  yLocation: number;
  gridId: number;
  readOnly: boolean;
  value: number;  
}

interface State {
  value: number;  
}

export default class GridElement extends react.Component<Props, State> {
  render() {
    return <div>{this.state.value}</div>;
  }

  constructor(props: Props) {
    super(props);
    this.state = ({ value: this.props.value});
  }  
}
