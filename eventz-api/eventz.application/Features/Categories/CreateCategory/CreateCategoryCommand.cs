using Eventz.Application.Common;
using Eventz.Application.Dtos;
using Eventz.Domain.Entitites;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Application.Features.Categories.CreateCategory
{
    public record CreateCategoryCommand(string Name, string Description) : IRequest<ApiResponse<CategoryDto>>;
}
