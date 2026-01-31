using Eventz.Application.Dtos;
using Eventz.Domain.Entitites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Application.Interfaces
{
    public interface IAuth
    {
        public Task<RegisterDto> RegisterUser(RegisterDto registerDto);
    }

}
