using HMS.Migrations;
using HMS.Models;

namespace HMS.Persistence.Repositories;

public class GuestRepository : GenericRepository<Guest>
{
    public GuestRepository(AppDbContext _context) : base(_context)
    {
    }
}
