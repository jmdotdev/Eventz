using Eventz.Domain.Entitites;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Infrastructure.Configurations
{
    public class VenueConfiguration : IEntityTypeConfiguration<Venue>
    {
        public void Configure(EntityTypeBuilder<Venue> builder)
        {
            builder.ToTable("Venues");
            builder.HasIndex(v => v.Id);
            builder.Property(v => v.Name).IsRequired();
            builder.Property(v => v.Address).IsRequired();
            builder.Property(v => v.City).IsRequired();
            builder.Property(v => v.Capacity).IsRequired();
        }
    }
}
