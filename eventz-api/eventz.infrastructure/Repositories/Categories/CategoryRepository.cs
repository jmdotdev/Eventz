using Eventz.Application.Interfaces;
using Eventz.Domain.Entitites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Infrastructure.Repositories.Categories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly AppDbContext _context;

        private CategoryRepository (AppDbContext context)
        {
            _context = context;
        }
      
        public async Task CreateCategory(Category category)
        {
            await _context.Categories.AddAsync(category);
            await _context.SaveChangesAsync();
        }
    }
}
