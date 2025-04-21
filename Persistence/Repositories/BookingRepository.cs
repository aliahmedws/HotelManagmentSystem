using HMS.Models;
using HMS.Models.Entities;

namespace HMS.Persistence.Repositories;

public class BookingRepository : GenericRepository<Booking>
{
    public BookingRepository(AppDbContext _context) : base(_context)
    {

    }
}
