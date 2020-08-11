import { MakeRequest } from "./requests";
import * as Routes from "../Constants/Routes";
import { GridElementValues } from "../helperClasses/GridElementValues";

export function getGameElementValue(
  gridId: number,
  xLocation: number,
  yLocation: number
): Object {
  var url = Routes.getGameElementValue;
  var params = {
    gridId: gridId,
    xLocation: xLocation,
    yLocation: yLocation,
  };

  return MakeRequest(url, params);
}

export async function getGrid(gridId: number): Promise<GridElementValues[]> {
  var url = Routes.getGrid;
  var params = {
    gridId: gridId,
  };
  return await MakeRequest(url, params);
}
