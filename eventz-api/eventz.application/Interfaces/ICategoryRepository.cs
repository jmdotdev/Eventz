using Eventz.Domain.Entitites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Application.Interfaces
{
    public interface ICategoryRepository
    {
        public Task CreateCategory(Category category);
    }
}
