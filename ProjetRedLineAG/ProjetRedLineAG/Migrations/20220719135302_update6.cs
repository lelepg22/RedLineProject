using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class update6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Applications_Entreprises_EntrepriseId",
                table: "Applications");

            migrationBuilder.DropColumn(
                name: "EntrepriseName",
                table: "Applications");

            migrationBuilder.AlterColumn<DateTime>(
                name: "TimeApplication",
                table: "Applications",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<int>(
                name: "EntrepriseId",
                table: "Applications",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Applications_Entreprises_EntrepriseId",
                table: "Applications",
                column: "EntrepriseId",
                principalTable: "Entreprises",
                principalColumn: "EntrepriseId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Applications_Entreprises_EntrepriseId",
                table: "Applications");

            migrationBuilder.AlterColumn<DateTime>(
                name: "TimeApplication",
                table: "Applications",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "EntrepriseId",
                table: "Applications",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EntrepriseName",
                table: "Applications",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Applications_Entreprises_EntrepriseId",
                table: "Applications",
                column: "EntrepriseId",
                principalTable: "Entreprises",
                principalColumn: "EntrepriseId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
