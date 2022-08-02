using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class statutrelation2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Person_StatutModel_StatutId",
                table: "Person");

            migrationBuilder.DropPrimaryKey(
                name: "PK_StatutModel",
                table: "StatutModel");

            migrationBuilder.RenameTable(
                name: "StatutModel",
                newName: "Statut");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Statut",
                table: "Statut",
                column: "StatutId");

            migrationBuilder.AddForeignKey(
                name: "FK_Person_Statut_StatutId",
                table: "Person",
                column: "StatutId",
                principalTable: "Statut",
                principalColumn: "StatutId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Person_Statut_StatutId",
                table: "Person");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Statut",
                table: "Statut");

            migrationBuilder.RenameTable(
                name: "Statut",
                newName: "StatutModel");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StatutModel",
                table: "StatutModel",
                column: "StatutId");

            migrationBuilder.AddForeignKey(
                name: "FK_Person_StatutModel_StatutId",
                table: "Person",
                column: "StatutId",
                principalTable: "StatutModel",
                principalColumn: "StatutId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
