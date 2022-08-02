using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class personsent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PersonSentModelId",
                table: "Person",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "PersonSent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicationId = table.Column<int>(nullable: false),
                    PersonId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonSent", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PersonSent_Application_ApplicationId",
                        column: x => x.ApplicationId,
                        principalTable: "Application",
                        principalColumn: "ApplicationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Person_PersonSentModelId",
                table: "Person",
                column: "PersonSentModelId");

            migrationBuilder.CreateIndex(
                name: "IX_PersonSent_ApplicationId",
                table: "PersonSent",
                column: "ApplicationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Person_PersonSent_PersonSentModelId",
                table: "Person",
                column: "PersonSentModelId",
                principalTable: "PersonSent",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Person_PersonSent_PersonSentModelId",
                table: "Person");

            migrationBuilder.DropTable(
                name: "PersonSent");

            migrationBuilder.DropIndex(
                name: "IX_Person_PersonSentModelId",
                table: "Person");

            migrationBuilder.DropColumn(
                name: "PersonSentModelId",
                table: "Person");
        }
    }
}
