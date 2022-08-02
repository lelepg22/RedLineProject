using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class goodlucky : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Document",
                table: "Document");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Document");

            migrationBuilder.AddColumn<int>(
                name: "ApplicationModelApplicationId",
                table: "DocumentsSent",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DocumentId",
                table: "Document",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "DocumentSentModelId",
                table: "Document",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Document",
                table: "Document",
                column: "DocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_DocumentsSent_ApplicationModelApplicationId",
                table: "DocumentsSent",
                column: "ApplicationModelApplicationId");

            migrationBuilder.CreateIndex(
                name: "IX_Document_DocumentSentModelId",
                table: "Document",
                column: "DocumentSentModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Document_DocumentsSent_DocumentSentModelId",
                table: "Document",
                column: "DocumentSentModelId",
                principalTable: "DocumentsSent",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_DocumentsSent_Application_ApplicationModelApplicationId",
                table: "DocumentsSent",
                column: "ApplicationModelApplicationId",
                principalTable: "Application",
                principalColumn: "ApplicationId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Document_DocumentsSent_DocumentSentModelId",
                table: "Document");

            migrationBuilder.DropForeignKey(
                name: "FK_DocumentsSent_Application_ApplicationModelApplicationId",
                table: "DocumentsSent");

            migrationBuilder.DropIndex(
                name: "IX_DocumentsSent_ApplicationModelApplicationId",
                table: "DocumentsSent");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Document",
                table: "Document");

            migrationBuilder.DropIndex(
                name: "IX_Document_DocumentSentModelId",
                table: "Document");

            migrationBuilder.DropColumn(
                name: "ApplicationModelApplicationId",
                table: "DocumentsSent");

            migrationBuilder.DropColumn(
                name: "DocumentId",
                table: "Document");

            migrationBuilder.DropColumn(
                name: "DocumentSentModelId",
                table: "Document");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Document",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Document",
                table: "Document",
                column: "Id");
        }
    }
}
