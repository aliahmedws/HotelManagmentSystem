namespace HMS.Models.Entities;

public class Guest
{
    public Guest()
    {
        Bookings = new List<Booking>();
    }

    public int Id { get; set; }

    public string? FullName { get; set; }

    public string? PhoneNumber { get; set; }

    public string? Email { get; set; }

    public DateTime CheckInDate { get; set; }

    public DateTime? CheckOutDate { get; set; }

    public List<Booking> Bookings { get; set; }
}
