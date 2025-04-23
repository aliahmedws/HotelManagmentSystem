using HMS.Models.Entities;
using HMS.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuestController : ControllerBase
    {
        private readonly UnitOfWork _uow;
        public GuestController(UnitOfWork uow)
        {
            _uow = uow;
        }
        [HttpGet]
        public List<Guest> GetGuests()
        {
            var result = _uow.Guests.GetList();
            return result;
        }
    }
}
