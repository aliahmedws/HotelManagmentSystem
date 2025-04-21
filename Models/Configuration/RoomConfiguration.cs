using HMS.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HMS.Models.Configuration;

public class RoomConfiguration : IEntityTypeConfiguration<Room>
{
    public void Configure(EntityTypeBuilder<Room> builder)
    {
        builder.Property(x => x.RoomNo).HasMaxLength(64).IsRequired();
        builder.Property(x => x.Description).HasMaxLength(300);
    }
}
