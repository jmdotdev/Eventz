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
        public Guid UserToken { get; set; } = Guid.NewGuid();
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedAt { get; set; }
        public List<EventRegistration> EventRegistrations { get; set; } = new List<EventRegistration>();
    }
}
