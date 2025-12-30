using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Application.Dtos
{
    public class CategoryDto
    {
        public Guid? CategoryToken { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
