using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class statutrelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StatutPerson",
                table: "Person");

            migrationBuilder.AddColumn<int>(
                name: "StatutId",
                table: "Person",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "StatutModel",
                columns: table => new
                {
                    StatutId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TitleStatut = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StatutModel", x => x.StatutId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Person_StatutId",
                table: "Person",
                column: "StatutId");

            migrationBuilder.AddForeignKey(
                name: "FK_Person_StatutModel_StatutId",
                table: "Person",
                column: "StatutId",
                principalTable: "StatutModel",
                principalColumn: "StatutId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Person_StatutModel_StatutId",
                table: "Person");

            migrationBuilder.DropTable(
                name: "StatutModel");

            migrationBuilder.DropIndex(
                name: "IX_Person_StatutId",
                table: "Person");

            migrationBuilder.DropColumn(
                name: "StatutId",
                table: "Person");

            migrationBuilder.AddColumn<string>(
                name: "StatutPerson",
                table: "Person",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
