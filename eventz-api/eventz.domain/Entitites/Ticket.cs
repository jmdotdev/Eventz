using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Domain.Entitites
{
    public class Ticket
    {
        public int Id { get; set; }
        public Guid TicketToken { get; set; } = Guid.NewGuid();
        public int EventId { get; set; }
        public string Type { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public Event Event { get; set; }
    }
}
