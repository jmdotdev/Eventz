using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Domain.Entitites
{
    public class Venue
    {
        public int Id { get; set; }
        public Guid VenueToken { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public int Capacity { get; set; }
        public ICollection<Event> Events { get; set; }
    }
}
