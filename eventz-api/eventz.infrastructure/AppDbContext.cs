
using Eventz.Domain.Entitites;
using Microsoft.EntityFrameworkCore;

namespace Eventz.Infrastructure
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<DbContext> options) : base(options)
        {
        }
        public DbSet<Event> Events => Set<Event>();

        public DbSet<Category> Categories => Set<Category>();
    }
}
