namespace HMS.Models.Entities;

public class Booking
{
    public int Id { get; set; }

    public int RoomId { get; set; }

    public int GuestId { get; set; }

    public DateTime BookingDate { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public decimal TotalAmount { get; set; }

    public bool IsPaid { get; set; }

    public Room? Room { get; set; }

    public Guest? Guest { get; set; }
}
