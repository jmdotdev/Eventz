using Eventz.Application.Dtos;
using Eventz.Application.Interfaces;
using Eventz.Domain.Entitites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Infrastructure.Repositories.Auth
{
    public  class AuthRepository : IAuth
    {
        private AppDbContext _context;

        public AuthRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<RegisterDto> RegisterUser (RegisterDto registerDto)
        {
            var user = new User{
                UserName = registerDto.UserName,
                Email = registerDto.Email,
                Password = registerDto.Password, //TODO: Hash password
                CreatedAt = DateTime.Now
            };
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return new RegisterDto
            {
                UserName = registerDto.UserName,
                Email = registerDto.Email,
                Password = registerDto.Password,
            };
 
        }
    }
}
