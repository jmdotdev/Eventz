using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Domain.Entitites
{
    public class User
    {
        public int Id { get; set; }
        public Guid UserToken { get; set; } = new Guid();
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedAt { get; set; }
        public List<Ticket> Tickets { get; set; }
        public List<Event> Events { get; set; }
    }
}
