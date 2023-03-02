using Microsoft.AspNetCore.Mvc;
using WebOnkoDis.Entities;
using WebOnkoDis.Services.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebOnkoDis.Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorService _doctorService;

        public DoctorController(IDoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        // GET: api/<DoctorController>
        [HttpGet]
        public ActionResult<IEnumerable<Doctor>> Get()
        {
            return _doctorService.Get();
        }

        // GET api/<DoctorController>/5
        [HttpGet("{id}")]
        public ActionResult<Doctor> Get(int id)
        {
            return _doctorService.GetById(id);
        }

        // POST api/<DoctorController>
        [HttpPost]
        public ActionResult<int> Post(Doctor doctor)
        {
            if (_doctorService.Post(doctor) > 0)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // PUT api/<DoctorController>/5
        [HttpPut]
        public void Put(Doctor doctor)
        {
            _doctorService.Put(doctor);
        }

        // DELETE api/<DoctorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _doctorService.DeleteById(id);
        }
    }
}
