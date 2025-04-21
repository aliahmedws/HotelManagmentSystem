using HMS.Models.Enums.RoomTypes;

namespace HMS.Models.Entities;

public class Room
{
    public Room()
    {
        Bookings = new List<Booking>();
    }
    public int Id { get; set; }

    public string? RoomNo { get; set; }

    public RoomType? RoomType { get; set; } // e.g  Single , Double, Deluxe

    public decimal PricePerNight { get; set; }

    public string? Description { get; set; }

    public List<Booking> Bookings { get; set; }
}
