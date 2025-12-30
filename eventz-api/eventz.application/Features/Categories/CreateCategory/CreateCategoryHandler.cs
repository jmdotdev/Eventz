using Eventz.Application.Common;
using Eventz.Application.Dtos;
using Eventz.Application.Interfaces;
using Eventz.Domain.Entitites;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Application.Features.Categories.CreateCategory
{
    public class CreateCategoryHandler: IRequestHandler<CreateCategoryCommand, ApiResponse<CategoryDto>>
    {
        private readonly ICategoryRepository _repository;
        public CreateCategoryHandler(ICategoryRepository repository) {
             _repository = repository;
        }

        public async Task<ApiResponse<CategoryDto>> Handle (CreateCategoryCommand createCategoryCommand, CancellationToken cancellationToken)
        {
            var category = new Category {
                Name = createCategoryCommand.Name,
                Description = createCategoryCommand.Description
            };
            await _repository.CreateCategory(category);
            var categoryDto = new CategoryDto
            {
                Name = category.Name,
                Description = category.Description,
            };
            return ApiResponse<CategoryDto>.Success(categoryDto);
        }
    }
}
