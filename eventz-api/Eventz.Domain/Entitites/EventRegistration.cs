using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Domain.Entitites
{
    public class EventRegistration
    {
        public int Id { get; set; }
        public Guid EventRegistrationToken { get; set; } = Guid.NewGuid();
        public int UserId { get; set; }
        public int EventId { get; set; }
        public DateTime RegisteredAt { get; set; }
        public bool CheckedIn { get; set; }
        public Event Event { get; set; }
        public User User { get; set; }

    }
}
