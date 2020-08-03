import React, { useState, useEffect } from "react";
import GridElement from "./GridElement";
import { getGrid } from "../helperFunctions/gets";
import { GridElementValues } from "../helperClasses/GridElementValues";
import "../style/grid.css";

interface Props {
    gridId: number;
}

export default function Grid(props: Props) {
    const [gridElements, useGridElements] = useState(new Array<GridElementValues>());

    useEffect(() => {
        const fetchData = async () => {
            let gridelems = await getGrid(props.gridId);
            let elements: GridElementValues[] = [];
            for (var count = 0; count < gridelems.length; count++) {
                const item: GridElementValues = gridelems[count];
                elements.push(item);
            }
            useGridElements(elements);
        };

        fetchData();
    }, []);

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
}

