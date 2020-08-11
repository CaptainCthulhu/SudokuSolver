using Microsoft.EntityFrameworkCore.Migrations;
using SodokuSolver.Models;

namespace SodokuSolver.Migrations
{
    public partial class ReadOnlyGridElement : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "ReadOnly",
                table: "GridElements",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReadOnly",
                table: "GridElements");
        }
    }
}
