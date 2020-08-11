using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace sodokusolver {
    public class Grid {
        public int GridId { get; set; }
        public List<GridElement> GridElements { get; set; }

        public Grid (int gridId) {
            GridId = gridId;
        }

    }
}