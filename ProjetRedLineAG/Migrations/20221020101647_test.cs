using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Application_Entreprise_EntrepriseId",
                table: "Application");

            migrationBuilder.UpdateData(
                table: "Application",
                keyColumn: "ApplicationId",
                keyValue: 1,
                column: "TimeApplication",
                value: new DateTime(2022, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddForeignKey(
                name: "FK_Application_Entreprise_EntrepriseId",
                table: "Application",
                column: "EntrepriseId",
                principalTable: "Entreprise",
                principalColumn: "EntrepriseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Application_Entreprise_EntrepriseId",
                table: "Application");

            migrationBuilder.UpdateData(
                table: "Application",
                keyColumn: "ApplicationId",
                keyValue: 1,
                column: "TimeApplication",
                value: new DateTime(2022, 9, 12, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddForeignKey(
                name: "FK_Application_Entreprise_EntrepriseId",
                table: "Application",
                column: "EntrepriseId",
                principalTable: "Entreprise",
                principalColumn: "EntrepriseId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
