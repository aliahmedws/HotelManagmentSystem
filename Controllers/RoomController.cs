using HMS.Models.Entities;
using HMS.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly UnitOfWork _uow;
        public RoomController(UnitOfWork uow) { 
            _uow = uow;
        }
        [HttpGet]
        public List<Room> GetBookings()
        {
            var result = _uow.Rooms.GetList();
            return result;
        }
    }
}
