import React, { Component } from "react";
import GridElement from "./GridElement";
import { getGrid } from "../helperFunctions/gets";

interface Props {
  gridId: number;
}

interface State {
  gridElements: GridElement[];
}

export class Grid extends Component<Props, State> {
  render() {
    let elems = [];
    for (let y: number = 0; y < 9; y++) {
      var row = [];
      for (let x: number = 0; x < 9; x++) {
        let element = this.state.gridElements.find(function (obj) {
          return obj.props.xLocation === x && obj.props.yLocation === y;
        });

        row.push(
          <div className={"col"} key={Math.random()}>
            {element !== undefined ? element.render() : ""}
          </div>
        );
      }
      elems.push(
        <div className="row" key={Math.random()}>
          {row}
        </div>
      );
    }
    return <div className={"border"}> {elems} </div>;
  }

  constructor(props: Props) {
    super(props);
    let elements: GridElement[] = [];
    let count: number = 0;
    for (var y = 0; y < 9; y++) {
      for (var x = 0; x < 9; x++)
        elements.push(
          new GridElement({
            xLocation: x,
            yLocation: y,
            gridId: this.props.gridId,
            readOnly: true,
            value: count,
          })
        );
      count++;
    }
    this.state = { gridElements: elements };
  }

  componentDidMount() {
    var returnObj = getGrid(this.props.gridId);
    returnObj.then((response) => {
      let gridelems = response as GridElement[];
      let elements: GridElement[] = [];
      for (var count = 0; count < gridelems.length; count++) {
        const item: GridElement = gridelems[count];
        elements.push(
          new GridElement({
            xLocation: item.props.xLocation,
            yLocation: item.props.yLocation,
            gridId: item.props.gridId,
            readOnly: item.props.readOnly,
            value: item.props.value,
          })
        );
      }

      this.setState({ gridElements: elements });
    });
  }
}
