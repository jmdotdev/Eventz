using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Domain.Entitites
{
    public class Event
    {
        public int Id { get; set; }
        public Guid EventToken { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Capacity { get; set; }
        public bool IsPublic { get; set; }
        //public string OrganizerId { get; set; }
        public int VenueId { get; set; }
        public int CategoryId { get; set; }
        public Venue Venue { get; set; }
        public Category Category { get; set; }

        //public User Organizer { get; set; }

        public ICollection<EventRegistration> Registrations { get; set; }
        public ICollection<Ticket> Tickets { get; set; }
    }
}
