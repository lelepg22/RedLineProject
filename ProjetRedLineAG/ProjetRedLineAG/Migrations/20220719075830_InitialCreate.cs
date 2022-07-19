using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetRedLineAG.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    EntrepriseId = table.Column<int>(nullable: false),
                    EntrepriseName = table.Column<string>(nullable: true),
                    TimeApplication = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Applications", x => x.Id);
                });

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
                name: "Entreprises",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TitleEntreprise = table.Column<string>(nullable: true),
                    CommentsEntreprise = table.Column<string>(nullable: true),
                    LinkEntreprise = table.Column<string>(nullable: true),
                    TelEntreprise = table.Column<string>(nullable: true),
                    EmailEntreprise = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entreprises", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Persons",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EntrepriseId = table.Column<int>(nullable: false),
                    LastNamePerson = table.Column<string>(nullable: true),
                    FirstNamePerson = table.Column<string>(nullable: true),
                    StatutPerson = table.Column<string>(nullable: true),
                    TelPerson = table.Column<string>(nullable: true),
                    EmailPerson = table.Column<string>(nullable: true),
                    CommentsPerson = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persons", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Applications");

            migrationBuilder.DropTable(
                name: "Documents");

            migrationBuilder.DropTable(
                name: "Entreprises");

            migrationBuilder.DropTable(
                name: "Persons");
        }
    }
}
