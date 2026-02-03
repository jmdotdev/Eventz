using Eventz.Application.Features.Auth.Register;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Eventz.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public IMediator _mediator;
        public AuthController(IMediator mediator) {
            _mediator = mediator;
        }
        [HttpPost]
        public async Task<IActionResult> Register (RegistrationCommand command)
        {
            var result =  await _mediator.Send(command);
            if (result.Errored)
            {
                return BadRequest(result);
            }
            return Ok(result);
        }
    }
}
