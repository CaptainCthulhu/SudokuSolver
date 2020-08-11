using Microsoft.EntityFrameworkCore.Migrations; 
using SodokuSolver.Models;

namespace SodokuSolver.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Grids",
                columns: table => new
                {
                    GridId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grids", x => x.GridId);
                });

            migrationBuilder.CreateTable(
                name: "GridElements",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    XLocation = table.Column<int>(nullable: false),
                    YLocation = table.Column<int>(nullable: false),
                    GridId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GridElements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GridElements_Grids_GridId",
                        column: x => x.GridId,
                        principalTable: "Grids",
                        principalColumn: "GridId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GridElements_GridId",
                table: "GridElements",
                column: "GridId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GridElements");

            migrationBuilder.DropTable(
                name: "Grids");
        }
    }
}
