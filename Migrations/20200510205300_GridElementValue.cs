using Microsoft.EntityFrameworkCore.Migrations;
using SodokuSolver.Models;

namespace SodokuSolver.Migrations
{
    public partial class GridElementValue : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Value",
                table: "GridElements",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Value",
                table: "GridElements");
        }
    }
}
