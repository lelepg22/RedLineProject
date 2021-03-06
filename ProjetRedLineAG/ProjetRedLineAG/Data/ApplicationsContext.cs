using ProjetRedLineAG.Models;
using Microsoft.EntityFrameworkCore;

namespace ProjetRedLineAG.Data
{
    public class ApplicationsContext : DbContext
    {
        public ApplicationsContext(DbContextOptions<ApplicationsContext> options) : base(options)
        {

        }

        public DbSet<ApplicationModel> Applications { get; set; }

        public DbSet<DocumentModel> Documents { get; set; }

        public DbSet<DocumentSentModel> DocumentsSent { get; set; }

        public DbSet<EntrepriseModel> Entreprises { get; set; }

        public DbSet<PersonModel> Persons { get; set; }
    }
}
