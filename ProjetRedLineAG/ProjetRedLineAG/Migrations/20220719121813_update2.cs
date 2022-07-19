using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class update2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Entreprises",
                table: "Entreprises");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Entreprises");

            migrationBuilder.AddColumn<int>(
                name: "EntrepriseId",
                table: "Entreprises",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Entreprises",
                table: "Entreprises",
                column: "EntrepriseId");

            migrationBuilder.CreateIndex(
                name: "IX_Applications_EntrepriseId",
                table: "Applications",
                column: "EntrepriseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Applications_Entreprises_EntrepriseId",
                table: "Applications",
                column: "EntrepriseId",
                principalTable: "Entreprises",
                principalColumn: "EntrepriseId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Applications_Entreprises_EntrepriseId",
                table: "Applications");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Entreprises",
                table: "Entreprises");

            migrationBuilder.DropIndex(
                name: "IX_Applications_EntrepriseId",
                table: "Applications");

            migrationBuilder.DropColumn(
                name: "EntrepriseId",
                table: "Entreprises");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Entreprises",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Entreprises",
                table: "Entreprises",
                column: "Id");
        }
    }
}
