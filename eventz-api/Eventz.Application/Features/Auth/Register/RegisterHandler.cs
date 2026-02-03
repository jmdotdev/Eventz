using Eventz.Application.Common;
using Eventz.Application.Dtos;
using Eventz.Application.Interfaces;
using Eventz.Domain.Entitites;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Application.Features.Auth.Register
{
    internal class RegisterHandler : IRequestHandler<RegistrationCommand, ApiResponse<RegisterDto>>
    {
        private readonly IAuth _auth;

        public RegisterHandler(IAuth auth)
        {
            _auth = auth;
        }

        public async Task<ApiResponse<RegisterDto>> Handle (RegistrationCommand command, CancellationToken cancellationToken) {
            var hasher = new PasswordHasher<object>();
            var hashedPassword = hasher.HashPassword(null, command.Password);
            var result = hasher.VerifyHashedPassword(null, hashedPassword, command.Password);

            if (result != PasswordVerificationResult.Success)
            {
                return ApiResponse<RegisterDto>.Failure("Password Mismatch");
            }
            var newUser = new RegisterDto
            {
                UserName = command.UserName,
                Email = command.Email,
                Password = hashedPassword
            };
            await _auth.RegisterUser (newUser);
            return ApiResponse<RegisterDto>.Success(newUser);
        } 

    }
}
