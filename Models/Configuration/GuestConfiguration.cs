using HMS.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HMS.Models.Configuration;

public class GuestConfiguration : IEntityTypeConfiguration<Guest>
{
    public void Configure(EntityTypeBuilder<Guest> builder)
    {
        builder.Property(x => x.FullName).HasMaxLength(64).IsRequired();
        builder.Property(x => x.PhoneNumber).HasMaxLength(15).IsRequired();
        builder.Property(x => x.CheckInDate).IsRequired();
    }
}
