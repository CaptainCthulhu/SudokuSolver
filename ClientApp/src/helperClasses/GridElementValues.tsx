export class GridElementValues {
  Id: number;
  XLocation: number;
  YLocation: number;
  GridId: number;
  ReadOnly: boolean;
  Value: number;

  constructor(
    id: number,
    xLocation: number,
    yLocation: number,
    gridId: number,
    readonly: boolean,
    value: number
  ) {
    this.Id = id;
    this.XLocation = xLocation;
    this.YLocation = yLocation;
    this.GridId = gridId;
    this.ReadOnly = readonly;
    this.Value = value;
  }
}
