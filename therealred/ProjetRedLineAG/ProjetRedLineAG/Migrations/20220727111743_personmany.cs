using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class personmany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Persons_EntrepriseId",
                table: "Persons");

            migrationBuilder.AddColumn<int>(
                name: "PersonId",
                table: "Entreprises",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Persons_EntrepriseId",
                table: "Persons",
                column: "EntrepriseId");

            migrationBuilder.CreateIndex(
                name: "IX_Entreprises_PersonId",
                table: "Entreprises",
                column: "PersonId");

            migrationBuilder.AddForeignKey(
                name: "FK_Entreprises_Persons_PersonId",
                table: "Entreprises",
                column: "PersonId",
                principalTable: "Persons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Entreprises_Persons_PersonId",
                table: "Entreprises");

            migrationBuilder.DropIndex(
                name: "IX_Persons_EntrepriseId",
                table: "Persons");

            migrationBuilder.DropIndex(
                name: "IX_Entreprises_PersonId",
                table: "Entreprises");

            migrationBuilder.DropColumn(
                name: "PersonId",
                table: "Entreprises");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_EntrepriseId",
                table: "Persons",
                column: "EntrepriseId",
                unique: true,
                filter: "[EntrepriseId] IS NOT NULL");
        }
    }
}
