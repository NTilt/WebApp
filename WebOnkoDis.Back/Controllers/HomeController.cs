using Microsoft.AspNetCore.Mvc;
using WebOnkoDis.Entities;
using WebOnkoDis.Services.Interfaces;

namespace WebOnkoDis.Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IHomePostService _homePostService;

        public HomeController(IHomePostService homePostService)
        {
            _homePostService = homePostService;
        }

        // GET: api/<HomeController>
        [HttpGet]
        public ActionResult<IEnumerable<HomePost>> Get()
        {
            return _homePostService.Get();
        }

        // GET api/<HomeController>/5
        [HttpGet("{id}")]
        public HomePost Get(int id)
        {
            return _homePostService.GetById(id);
        }

        // POST api/<HomeController>
        [HttpPost]
        public ActionResult<int> Post(HomePost homePost)
        {
            if (_homePostService.Post(homePost) > 0)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // PUT api/<HomeController>/5
        [HttpPut]
        public void Put(HomePost homePost)
        {
            _homePostService.Put(homePost);
        }

        // DELETE api/<HomeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _homePostService .DeleteById(id);
        }
    }
}
