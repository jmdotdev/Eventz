using Eventz.Application.Common;
using Eventz.Application.Features.Categories.CreateCategory;
using Eventz.Application.Features.Categories.GetCategory;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Eventz.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CategoriesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> Create (CreateCategoryCommand command)
        {
            var result = await _mediator.Send(command);
            if (result.Errored)
            {
                return BadRequest(result);
            }
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> Get ([FromQuery]GetCategoryQuery query)
        {
            var result = await _mediator.Send(query);
            if (result.Errored)
            {
                return BadRequest(result);
            }
            return Ok(result);
        }
    }
}
