import React, { useState, useEffect, useCallback } from "react";
import GridElement from "./GridElement";
import { getGrid } from "../helperFunctions/gets";
import { GridElementValues } from "../helperClasses/GridElementValues";
import "../style/grid.css";

interface Props {
  gridId: number;
}

export default function Grid(props: Props) {
  const [gridElements, setGridElements] = useState<GridElementValues[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (gridId: number) => {
      setLoading(true);
      const gridelems = await getGrid(gridId);
      const elements: GridElementValues[] = [];
      for (var count = 0; count < gridelems.length; count++) {
        const item: GridElementValues = gridelems[count];
        elements.push(item);
      }
      setLoading(false);
      return elements;
    };
    fetchData(props.gridId).then((x) =>
      setGridElements(x as GridElementValues[])
    );
  }, []);
  if (!loading) {
    let elems = [];
    for (let y: number = 0; y < 9; y++) {
      var row = [];
      for (let x: number = 0; x < 9; x++) {
        let element = gridElements.find(function (obj: GridElementValues) {
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
  } else {
    return <div>Loading...</div>;
  }
}
