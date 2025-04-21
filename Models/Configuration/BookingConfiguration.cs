using HMS.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HMS.Models.Configuration;

public class BookingConfiguration : IEntityTypeConfiguration<Booking>
{
    public void Configure(EntityTypeBuilder<Booking> builder)
    {
        builder.Property(x => x.RoomId).IsRequired();
        builder.Property(x => x.GuestId).IsRequired();
        builder.Property(x => x.BookingDate).IsRequired();
        builder.Property(x => x.StartDate).IsRequired();
        builder.Property(x => x.EndDate).IsRequired();
        builder.Property(x => x.TotalAmount).IsRequired();
        builder.Property(x => x.IsPaid).IsRequired();
    }
}
