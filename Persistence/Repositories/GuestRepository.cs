using HMS.Models;
using HMS.Models.Entities;

namespace HMS.Persistence.Repositories;

public class GuestRepository : GenericRepository<Guest>
{
    public GuestRepository(AppDbContext _context) : base(_context)
    {
    }
}
