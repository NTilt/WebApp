using Microsoft.AspNetCore.Mvc;
using WebOnkoDis.Entities;
using WebOnkoDis.Services.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebOnkoDis.Back.Controllers
{
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        // GET: api/<ReviewController>
        [Route("api/[controller]/GetByTwo")]
        [HttpGet]
        public ActionResult<List<List<Review>>> GetByTwo()
        {
            var res = _reviewService.GetByTwo();
            return res;
        }

        [Route("api/[controller]/Get")]
        // GET: api/<ReviewController>
        [HttpGet]
        public ActionResult<List<Review>> Get()
        {
            var res = _reviewService.Get();
            return res;
        }

        [Route("api/[controller]/{id:int}")]
        // GET api/<ReviewController>/5
        [HttpGet]
        public ActionResult<Review> Get(int id)
        {
            return _reviewService.GetById(id);
        }

        [Route("api/[controller]/Post")]
        // POST api/<ReviewController>
        [HttpPost]
        public ActionResult<int> Post(Review review)
        {
            if (_reviewService.Post(review) > 0)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [Route("api/[controller]/Put")]
        // PUT api/<ReviewController>/5
        [HttpPut]
        public void Put([FromBody] Review review)
        {
            _reviewService.Put(review);
        }

        [Route("api/[controller]/{id}")]
        // DELETE api/<ReviewController>/5
        [HttpDelete]
        public void Delete(int id)
        {
            _reviewService.DeleteById(id);
        }
    }
}
