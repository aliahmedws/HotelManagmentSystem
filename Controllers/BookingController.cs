using HMS.Models.Entities;
using HMS.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly UnitOfWork _uow;
        public BookingController(UnitOfWork uow) { 
            _uow = uow;
        }
        [HttpGet]
        public async List<Booking> GetBookings()
        {
            var result = await _uow.Bookings.All();
            return result;
        }
    }
}
