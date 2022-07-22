using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Data.Migrations
{
    public partial class tryingauth2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "TimeApplication",
                table: "Applications",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "DateTime2");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "TimeApplication",
                table: "Applications",
                type: "DateTime2",
                nullable: false,
                oldClrType: typeof(DateTime));
        }
    }
}
