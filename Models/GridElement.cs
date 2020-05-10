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

        public static GridElement getGridElement(int id)
        {
            return new GridElement(0, 0, id);            
        }

        public GridElement(int XLocation, int YLocation, int GridId)
        {

        }

    }
}