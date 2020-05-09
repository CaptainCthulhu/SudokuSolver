import React, { Component } from "react";
import GridElement from "./GridElement";
import Table from "react-bootstrap/Table";

export class Grid extends Component {
  render() {
    let elems = [];
    let count = 1;

    for (var y = 1; y < 10; y++) {
      var row = [];
      for (var x = 1; x < 10; x++) {
        row.push(
          <td key={x * y}>
            <GridElement xLocation={x} yLocation={y} value={count} />
          </td>
        );
        count++;
      }
      elems.push(<tr key={y}>{row}</tr>);
    }

    return (
      <div>
        <Table striped bordered hover variant="dark">
          <tbody> {elems} </tbody>
        </Table>
      </div>
    );
  }
}
