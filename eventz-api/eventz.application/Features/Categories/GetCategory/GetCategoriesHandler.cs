using Eventz.Application.Common;
using Eventz.Application.Dtos;
using Eventz.Application.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Application.Features.Categories.GetCategory
{
    public class GetCategoriesHandler : IRequestHandler<GetCategoryQuery, ApiResponse<List<CategoryDto>>>
    {
        public ICategoryRepository _repository;
        public GetCategoriesHandler(ICategoryRepository repository) { 
           _repository = repository;
        }

        public async Task<ApiResponse<List<CategoryDto>>> Handle (GetCategoryQuery query, CancellationToken cancellationToken)
        {
            var result = _repository.GetCategories();
            return ApiResponse<List<CategoryDto>>.Success(result.Result);
        }
    }
}
