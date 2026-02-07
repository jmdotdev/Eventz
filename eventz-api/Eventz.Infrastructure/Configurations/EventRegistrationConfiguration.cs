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
    public class EventRegistrationConfiguration : IEntityTypeConfiguration<EventRegistration>
    {
        public void Configure(EntityTypeBuilder<EventRegistration> builder)
        {
            builder.HasKey(er => er.Id);
            builder.HasIndex(er => new { er.UserId, er.EventId }).IsUnique();
            builder.Property(er => er.RegisteredAt)
           .HasDefaultValueSql("GETUTCDATE()");

            builder.HasOne(er => er.Event)
                .WithMany(e => e.Registrations)
                .HasForeignKey(e => e.EventId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(er => er.User)
                .WithMany(u => u.EventRegistrations)
                .HasForeignKey(e => e.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }

}
