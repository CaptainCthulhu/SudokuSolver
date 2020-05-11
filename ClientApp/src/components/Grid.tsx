import React, { Component } from "react";
import GridElement from "./GridElement";
import { getGrid } from "../helperFunctions/gets";
import { GridElementValues } from "../helperClasses/GridElementValues";
import "../style/grid.css";

interface Props {
  gridId: number;
}

interface State {
  gridElements: GridElementValues[];
}

export class Grid extends Component<Props, State> {
  render() {
    let elems = [];
    for (let y: number = 0; y < 9; y++) {
      var row = [];
      for (let x: number = 0; x < 9; x++) {
        let element = this.state.gridElements.find(function (obj) {
          return obj.XLocation === x && obj.YLocation === y;
        });
        if (element !== undefined) {
          row.push(           
              <GridElement
                id={element.Id}
                xLocation={element.XLocation}
                yLocation={element.YLocation}
                gridId={element.GridId}
                readOnly={element.ReadOnly}
                value={element.Value}
                key={element.Id}
              />            
          );
        }
      }
      elems.push(
        <div className="row" key={y + 100}>
          {row}
        </div>
      );
    }
    return <div className={"grid"}> {elems} </div>;
  }

  constructor(props: Props) {
    super(props);        
    this.state = { gridElements: []};
  }

  async componentDidMount() {
    let gridelems = await getGrid(this.props.gridId);
    let elements: GridElementValues[] = [];
    for (var count = 0; count < gridelems.length; count++) {
      const item: GridElementValues = gridelems[count];
      elements.push(item);
    }

    this.setState({ gridElements: elements });
  }
}
