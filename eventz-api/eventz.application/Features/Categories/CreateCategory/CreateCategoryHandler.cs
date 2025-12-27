using Eventz.Application.Interfaces;
using Eventz.Domain.Entitites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Application.Features.Categories.CreateCategory
{
    public class CreateCategoryHandler
    {
        private readonly ICategoryRepository _repository;
        public CreateCategoryHandler(ICategoryRepository repository) {
             _repository = repository;
        }

        public async Task<Category> Handle (CreateCategoryCommand createCategoryCommand, CancellationToken cancellationToken)
        {
            var category = new Category {
                Name = createCategoryCommand.Name,
                Description = createCategoryCommand.Description
            };
            await _repository.CreateCategory(category);
            return category;
        }
    }
}
