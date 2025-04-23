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
        public List<Booking> GetBookings()
        {
            var result = _uow.Bookings.GetList();
            return result;
        }
    }
}
