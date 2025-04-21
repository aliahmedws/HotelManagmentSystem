using HMS.Models;
using HMS.Models.Entities;

namespace HMS.Persistence.Repositories;

public class RoomRepository : GenericRepository<Room>
{
    public RoomRepository(AppDbContext _context) : base(_context)
    {
    }
}
