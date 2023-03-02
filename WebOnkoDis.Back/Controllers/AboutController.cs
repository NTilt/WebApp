using Microsoft.AspNetCore.Mvc;
using WebOnkoDis.Entities;
using WebOnkoDis.Services.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebOnkoDis.Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AboutController : ControllerBase
    {
        private readonly IAboutPostService _aboutPostService;

        public AboutController(IAboutPostService aboutPostService)
        {
            _aboutPostService = aboutPostService;
        }

        // GET: api/<AboutController>
        [HttpGet]
        public ActionResult<IEnumerable<AboutPost>> Get()
        {
            return _aboutPostService.Get();
        }

        // GET api/<AboutController>/5
        [HttpGet("{id}")]
        public ActionResult<AboutPost> Get(int id)
        {
            return _aboutPostService.GetById(id);
        }

        // POST api/<AboutController>
        [HttpPost]
        public ActionResult<int> Post(AboutPost aboutPost)
        {
            if (_aboutPostService.Post(aboutPost) > 0)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // PUT api/<AboutController>/5
        [HttpPut]
        public void Put( AboutPost aboutPost)
        {
            _aboutPostService.Put(aboutPost);
        }

        // DELETE api/<AboutController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _aboutPostService.DeleteById(id);
        }
    }
}
