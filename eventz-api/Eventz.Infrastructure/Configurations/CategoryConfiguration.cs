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
                builder.HasKey(x => x.Id);
            }

    }
}
