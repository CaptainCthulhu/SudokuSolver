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

        public bool ReadOnly {get; set;}
        
        public GridElement(int id, int xLocation, int yLocation, int gridId, int value, bool readOnly)
        {
            Id = id;
            XLocation = xLocation;
            YLocation = yLocation;
            GridId = gridId;
            Value = value;
            ReadOnly = readOnly;
        }

    }
}