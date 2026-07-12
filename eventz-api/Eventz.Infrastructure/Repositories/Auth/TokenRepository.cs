using Eventz.Application.Interfaces;
using Eventz.Domain.Entitites;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Infrastructure.Repositories.Auth
{
    public class TokenRepository : IToken
    {
        private IConfiguration _configuration;
        public TokenRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateAcesstoken(User user)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserToken.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email.ToString()),
                new Claim(JwtRegisteredClaimNames.Name, user.UserName)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));

            var credentials = new SigningCredentials(
                key,
                SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(
                    int.Parse(_configuration["Jwt:ExpiryMinutes"]!)),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
