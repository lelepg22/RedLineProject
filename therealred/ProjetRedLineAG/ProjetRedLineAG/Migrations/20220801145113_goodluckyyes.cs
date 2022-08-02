using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class goodluckyyes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DocumentsSent_Application_ApplicationModelApplicationId",
                table: "DocumentsSent");

            migrationBuilder.DropIndex(
                name: "IX_DocumentsSent_ApplicationModelApplicationId",
                table: "DocumentsSent");

            migrationBuilder.DropColumn(
                name: "ApplicationModelApplicationId",
                table: "DocumentsSent");

            migrationBuilder.CreateIndex(
                name: "IX_DocumentsSent_ApplicationId",
                table: "DocumentsSent",
                column: "ApplicationId");

            migrationBuilder.AddForeignKey(
                name: "FK_DocumentsSent_Application_ApplicationId",
                table: "DocumentsSent",
                column: "ApplicationId",
                principalTable: "Application",
                principalColumn: "ApplicationId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DocumentsSent_Application_ApplicationId",
                table: "DocumentsSent");

            migrationBuilder.DropIndex(
                name: "IX_DocumentsSent_ApplicationId",
                table: "DocumentsSent");

            migrationBuilder.AddColumn<int>(
                name: "ApplicationModelApplicationId",
                table: "DocumentsSent",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_DocumentsSent_ApplicationModelApplicationId",
                table: "DocumentsSent",
                column: "ApplicationModelApplicationId");

            migrationBuilder.AddForeignKey(
                name: "FK_DocumentsSent_Application_ApplicationModelApplicationId",
                table: "DocumentsSent",
                column: "ApplicationModelApplicationId",
                principalTable: "Application",
                principalColumn: "ApplicationId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
