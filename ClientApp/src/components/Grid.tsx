import React, { Component } from "react";
import GridElement from "./GridElement";

export class Grid extends Component {
  render() {
    let elems = [];
    let count = 1;

    for (var y = 1; y < 10; y++) {
      var row = [];
      for (var x = 1; x < 10; x++) {
        row.push(
          <div className={"col"} key={x * y}>
            <GridElement xLocation={x} yLocation={y} gameId={count}/>
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
