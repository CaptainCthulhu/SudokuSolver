import { MakeRequest } from "./requests";
import GridElement from "../components/GridElement";

export function getGameElementValue(
  gridId: number,
  xLocation: number,
  yLocation: number
): Object {
  var url = "/GridController/GetElement";
  var params = {
    gridId: gridId,
    xLocation: xLocation,
    yLocation: yLocation,
  };

  return MakeRequest(url, params);
}

export function getGrid(gridId: number) {
  var url = "/GridController/GetGrid";
  var params = {
    gridId: gridId,
  };
  return MakeRequest(url, params);
}
