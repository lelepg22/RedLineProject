using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class legal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Entreprise_PersonModel_PersonId",
                table: "Entreprise");

            migrationBuilder.DropForeignKey(
                name: "FK_PersonModel_Application_ApplicationId",
                table: "PersonModel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PersonModel",
                table: "PersonModel");

            migrationBuilder.RenameTable(
                name: "PersonModel",
                newName: "Person");

            migrationBuilder.RenameIndex(
                name: "IX_PersonModel_ApplicationId",
                table: "Person",
                newName: "IX_Person_ApplicationId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Person",
                table: "Person",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Entreprise_Person_PersonId",
                table: "Entreprise",
                column: "PersonId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Person_Application_ApplicationId",
                table: "Person",
                column: "ApplicationId",
                principalTable: "Application",
                principalColumn: "ApplicationId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Entreprise_Person_PersonId",
                table: "Entreprise");

            migrationBuilder.DropForeignKey(
                name: "FK_Person_Application_ApplicationId",
                table: "Person");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Person",
                table: "Person");

            migrationBuilder.RenameTable(
                name: "Person",
                newName: "PersonModel");

            migrationBuilder.RenameIndex(
                name: "IX_Person_ApplicationId",
                table: "PersonModel",
                newName: "IX_PersonModel_ApplicationId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PersonModel",
                table: "PersonModel",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Entreprise_PersonModel_PersonId",
                table: "Entreprise",
                column: "PersonId",
                principalTable: "PersonModel",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PersonModel_Application_ApplicationId",
                table: "PersonModel",
                column: "ApplicationId",
                principalTable: "Application",
                principalColumn: "ApplicationId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
