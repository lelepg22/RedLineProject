using ProjetRedLineAG.Models;
using Microsoft.EntityFrameworkCore;

namespace ProjetRedLineAG.Data
{
    public class ApplicationsContext : DbContext
    {
        public DbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<MovieViewModel> Movies { get; set; }

        public DbSet<MovieTypeViewModel> MovieTypes { get; set; }
    }
}
