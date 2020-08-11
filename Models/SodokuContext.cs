using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace sodokusolver {
    public class SudokuContext : DbContext {
        public SudokuContext (DbContextOptions<SudokuContext> options) : base (options) {
            var optionsBuilder = new DbContextOptionsBuilder<SudokuContext> ();
        }

        public DbSet<Grid> Grids { get; set; }
        public DbSet<GridElement> GridElements { get; set; }
    }
}