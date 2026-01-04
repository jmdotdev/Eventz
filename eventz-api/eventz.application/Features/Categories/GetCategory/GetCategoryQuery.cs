using Eventz.Application.Common;
using Eventz.Application.Dtos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Application.Features.Categories.GetCategory
{
    public record GetCategoryQuery(): IRequest<ApiResponse<List<CategoryDto>>>;
} 