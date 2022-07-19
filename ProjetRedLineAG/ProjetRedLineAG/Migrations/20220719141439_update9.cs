using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class update9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "TimeApplication",
                table: "Applications",
                type: "DateTime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "DateTime2",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "TimeApplication",
                table: "Applications",
                type: "DateTime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "DateTime2");
        }
    }
}
