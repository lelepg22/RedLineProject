using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ProjetRedLineAG.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetRedLineAG.Data
{
    public class ApplicationsContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationsContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
        public DbSet<ApplicationModel> Applications { get; set; }

        public DbSet<DocumentModel> Documents { get; set; }

        public DbSet<DocumentSentModel> DocumentsSent { get; set; }

        public DbSet<EntrepriseModel> Entreprises { get; set; }

        public DbSet<PersonModel> Persons { get; set; }
    }
}
