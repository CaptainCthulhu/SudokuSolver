using System;

namespace sodokusolver
{
    public class GridElement
    {
        public int Id {get; set;}
        public int XLocation {get; set;}
        public int YLocation {get; set;}
        public int GridId {get; set;}
        public Grid Grid {get; set;}  

        public int Value {get; set;}      

        public static GridElement getGridElement(int id)
        {
            return new GridElement(0, 0, id, 0);            
        }

        public GridElement(int xLocation, int yLocation, int gridId, int value)
        {
            XLocation = xLocation;
            YLocation = yLocation;
            GridId = gridId;
            Value = value;
        }

    }
}