import React, { useState } from "react";
import "../style/grid.css";

interface Props {
    id: number;
    xLocation: number;
    yLocation: number;
    gridId: number;
    readOnly: boolean;
    value: number;
}

export default function GridElement(props: Props) {

    const [selected, setSelected] = useState(false);
    const [value, setValue] = useState(props.value);
    const [valid, setValid] = useState(false);

    if (props.readOnly)
        return <div className={"col-1 cell"}>{value}</div>;
    else return <input className={getClass()} value={value} onClick={handleClick} onBlur={handleBlur} onChange={handleChange} ></input>;

    function getClass(): string {
        var cssClasses = "col-1 cell ";
        if (selected)
            cssClasses.concat("outline ");
        if (!valid)
            cssClasses.concat("invalid ");
        return cssClasses;
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
        setSelected(false);
    }

    function handleClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>): void {
        setSelected(true);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        var changedValue = e.target.value;

        setValid((/^\d$/).test(changedValue));
        setValue(parseInt(changedValue));
    }
}
