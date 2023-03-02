using Microsoft.AspNetCore.Mvc;
using WebOnkoDis.Entities;
using WebOnkoDis.Services.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebOnkoDis.Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        private readonly IRequestService _requestService;

        public RequestController(IRequestService requestService)
        {
            _requestService = requestService;
        }

        // GET: api/<RequestController>
        [HttpGet]
        public ActionResult<IEnumerable<Request>> Get()
        {
            return _requestService.Get();
        }

        // GET api/<RequestController>/5
        [HttpGet("{id}")]
        public ActionResult<Request> Get(int id)
        {
            return _requestService.GetById(id);
        }

        // POST api/<RequestController>
        [HttpPost]
        public ActionResult<int> Post(Request request)
        {
            if (_requestService.Post(request) > 0)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // PUT api/<RequestController>/5
        [HttpPut]
        public void Put(Request request)
        {
            _requestService.Put(request);
        }

        // DELETE api/<RequestController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _requestService.DeleteById(id);
        }
    }
}
