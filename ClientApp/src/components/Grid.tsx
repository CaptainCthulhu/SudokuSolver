import React, { Component } from "react";
import GridElement from "./GridElement";

export class Grid extends Component {
  render() {
    let elems = [];
    let count = 1;

    for (var y = 0; y < 9; y++) {
      var row = [];
      for (var x = 0; x < 9; x++) {
        row.push(
          <div className={"col"} key={x * y}>
            <GridElement xLocation={x} yLocation={y} gridId={count}/>
          </div>
        );
        count++;
      }
      elems.push(
        <div className="row" key={y}>
          {row}
        </div>
      );
    }

    return <div className={"border"}> {elems} </div>;
  }
}
