using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Data.Migrations
{
    public partial class tryingauth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Documents",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TitleDocument = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Documents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DocumentsSent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DocumentId = table.Column<int>(nullable: false),
                    ApplicationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DocumentsSent", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Entreprises",
                columns: table => new
                {
                    EntrepriseId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TitleEntreprise = table.Column<string>(nullable: true),
                    CommentsEntreprise = table.Column<string>(nullable: true),
                    LinkEntreprise = table.Column<string>(nullable: true),
                    TelEntreprise = table.Column<string>(nullable: true),
                    EmailEntreprise = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entreprises", x => x.EntrepriseId);
                });

            migrationBuilder.CreateTable(
                name: "Applications",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TitleApplication = table.Column<string>(nullable: true),
                    StatusApplication = table.Column<string>(nullable: true),
                    CommentsApplication = table.Column<string>(nullable: true),
                    ExternalLinkApplication = table.Column<string>(nullable: true),
                    TimeApplication = table.Column<DateTime>(type: "DateTime2", nullable: false),
                    EntrepriseId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Applications", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Applications_Entreprises_EntrepriseId",
                        column: x => x.EntrepriseId,
                        principalTable: "Entreprises",
                        principalColumn: "EntrepriseId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Persons",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LastNamePerson = table.Column<string>(nullable: true),
                    FirstNamePerson = table.Column<string>(nullable: true),
                    StatutPerson = table.Column<string>(nullable: true),
                    TelPerson = table.Column<string>(nullable: true),
                    EmailPerson = table.Column<string>(nullable: true),
                    CommentsPerson = table.Column<string>(nullable: true),
                    EntrepriseId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persons", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Persons_Entreprises_EntrepriseId",
                        column: x => x.EntrepriseId,
                        principalTable: "Entreprises",
                        principalColumn: "EntrepriseId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Applications_EntrepriseId",
                table: "Applications",
                column: "EntrepriseId");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_EntrepriseId",
                table: "Persons",
                column: "EntrepriseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Applications");

            migrationBuilder.DropTable(
                name: "Documents");

            migrationBuilder.DropTable(
                name: "DocumentsSent");

            migrationBuilder.DropTable(
                name: "Persons");

            migrationBuilder.DropTable(
                name: "Entreprises");
        }
    }
}
