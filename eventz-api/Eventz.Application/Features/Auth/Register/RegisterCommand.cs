using Eventz.Application.Common;
using Eventz.Application.Dtos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Application.Features.Auth.Register
{
    internal class RegisterCommand
    {
        public record RegistrationCommand (string UserName, string Email, string Password) : IRequest<ApiResponse<RegisterDto>>;
    }
}
