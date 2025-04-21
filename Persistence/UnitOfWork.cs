using HMS.Models;
using HMS.Persistence.Repositories;

namespace HMS.Persistence;

public class UnitOfWork : IDisposable
{
    private readonly AppDbContext _context;

    public GuestRepository Guests { get; set; }
    public BookingRepository Bookings { get; set; }
    public RoomRepository Rooms { get; set; }

    public UnitOfWork(AppDbContext context)
    {
        _context = context;
        Guests = new GuestRepository(_context);
        Bookings = new BookingRepository(_context);
        Rooms = new RoomRepository(_context);
    }

    public Task CompleteAsync()
    {
        return _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}
