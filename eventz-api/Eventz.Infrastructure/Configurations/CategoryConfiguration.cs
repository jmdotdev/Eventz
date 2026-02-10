using Eventz.Domain.Entitites;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Eventz.Infrastructure.Configurations
{
    public  class CategoryConfiguration: IEntityTypeConfiguration<Category>
    {
            public void Configure(EntityTypeBuilder<Category> builder)
            {

                builder.ToTable("Categories");
                builder.Property("Name").IsRequired().HasColumnType("VARCHAR(100)");
                builder.Property("Description").IsRequired().HasColumnType("TEXT");
                builder.HasKey(x => x.Id);
            }

    }
}
