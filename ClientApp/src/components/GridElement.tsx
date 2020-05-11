import React, * as react from "react";
import "../style/grid.css";

interface Props {
  id: number;
  xLocation: number;
  yLocation: number;
  gridId: number;
  readOnly: boolean;
  value: number;
}

interface State {
  value: string;
  selected: boolean;
  valid: boolean;
}

export default class GridElement extends react.Component<Props, State> {    

  render() {
    if (this.props.readOnly)
      return <div className={"col-1 cell"}>{this.state.value}</div>;
    else return <input className={this.getClass()} value={this.state.value} onClick={this.handleClick} onBlur={this.handleBlur} onChange={this.handleChange} ></input>;
  }

  constructor(props: Props) {
    super(props);
    this.state = { 
      value: this.props.value.toString(), 
      selected: false,
      valid: true };   
  }  

  getClass = () : string => {
    var cssClasses = "col-1 cell ";
    if (this.state.selected)
      cssClasses.concat("outline ");
    if (!this.state.valid)
      cssClasses.concat("invalid ");
    return cssClasses;
  }

  handleBlur = (e: React.FocusEvent<HTMLInputElement>) : void => 
  {
    this.setState({selected: false});
  }

  handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) : void =>
  {
      this.setState({selected: true});
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void =>
  { 
    var changedValue = e.target.value;
    var valid = (/^\d$/).test(changedValue)

    this.setState({
      value: changedValue,
      valid: valid
    });    
  }
}
