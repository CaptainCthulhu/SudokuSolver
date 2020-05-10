import React, * as react from "react";
import getGameElementValue from "../helperFunctions/requests";

interface Props {
  xLocation: number;
  yLocation: number;
  gridId: number;
}

interface State {
  readOnly: boolean;
  value: number;  
}

export default class GridElement extends react.Component<Props, State> {
  render() {
    return <div>{this.state.value}</div>;
  }

  constructor(props: Props) {
    super(props);
    this.state = ({ readOnly: true, value: 69 });
  }

  componentDidMount() {
    var result: object = getGameElementValue(
      this.props.gridId,
      this.props.xLocation,
      this.props.yLocation
    );

    this.setState({ ...result });
  }
}
