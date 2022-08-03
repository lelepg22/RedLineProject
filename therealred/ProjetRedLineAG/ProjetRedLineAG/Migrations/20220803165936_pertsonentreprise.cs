using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class pertsonentreprise : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "EntrepriseId",
                table: "Person",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Person_EntrepriseId",
                table: "Person",
                column: "EntrepriseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Person_Entreprise_EntrepriseId",
                table: "Person",
                column: "EntrepriseId",
                principalTable: "Entreprise",
                principalColumn: "EntrepriseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Person_Entreprise_EntrepriseId",
                table: "Person");

            migrationBuilder.DropIndex(
                name: "IX_Person_EntrepriseId",
                table: "Person");

            migrationBuilder.AlterColumn<int>(
                name: "EntrepriseId",
                table: "Person",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));
        }
    }
}
